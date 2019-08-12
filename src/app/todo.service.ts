import { StorageService } from './storage.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _source = new BehaviorSubject<Todo[]>([]);
  public source = this._source.asObservable();
  public increment = 0;
  constructor(private storageService: StorageService) 
  {
    this._source.next(this.getTodos())
  }

  create(value: string) {
    const todo = new Todo();
    todo.title = value;
    todo.date = new Date();
    todo.id = this.increment + 1;
    todo.complete = false;
    this.increment = this.increment + 1;
   
    const todos = this._source.getValue();
    todos.push(todo);
    this.updateTodos(todos);
  }

  private updateTodos(todos: Array<Todo>) {
    this.storageService.saveData('todos', todos);
    this._source.next(todos);
  }

  update(id, todo) {
    const todos = this._source.getValue();
    const index = todos.findIndex(todo => todo.id === id);
    todos[index] = todo;
    this.updateTodos(todos);
  }


  delete({ id }) {
    const todos = this._source.getValue();
    const newTodos = todos.filter(todo => todo.id !== id);
    this.updateTodos(newTodos);
  }

  public getTodos() {
    const todos = this.storageService.getData('todos');
    return todos || [];
  }

}
