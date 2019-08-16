import { DialogComponent } from "./dialog/dialog.component";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo";
import { MatDialog } from "@angular/material";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _source = new BehaviorSubject<Todo[]>([]);
  public source = this._source.asObservable();

  constructor(public dialog: MatDialog, private http: HttpClient) {
    this._source.next(this.getTodos());
  }

  create(value: string) {
    this.http
      .post<any>("api/todos", {
        description: value
      })
      .subscribe(({ data }) => {
        const todo = new Todo();
        todo.id = data.id;
        todo.title = data.description;
        todo.complete = data.completed;
        todo.deadLine = data.dueDate;
        todo.endDate = data.endDate ;
        todo.createDate = data.createdAt;

        const todos = this._source.getValue();
        todos.push(todo);
        this._source.next(todos);
        console.log(todos);
      });
  }

  update(id, todo) {
    this.http
      .put(`api/todos/${id}`, {
        description: todo.title,
        completed: todo.complete,
        dueDate: todo.deadLine,
        endDate: todo.endDate
      })
      .subscribe(() => {
        const todos = this._source.getValue();
        const index = todos.findIndex(todo => todo.id === id);
        todos[index] = todo;
        this._source.next(todos);
        console.log(todos);
      });
  }

  delete({ id }) {
    this.http.delete(`api/todos/${id}`).subscribe(() => {
      const todos = this._source.getValue();
      const indexForRemove = todos.findIndex(todo => todo.id == id);
      todos.splice(indexForRemove, 1);
      this._source.next(todos);
      console.log(todos);
    });
  }
  public openDialog(todo: Todo) {
    this.dialog.open(DialogComponent, { data: todo });
  }

  public getTodos(): Todo[] {
    this.http.get<any>("/api/todos").subscribe(({ data }) => {
      const todos = data.map(obj => {
        const todo = new Todo();
        todo.id = obj.id;
        todo.title = obj.description;
        todo.complete = obj.completed;
        todo.deadLine = obj.dueDate;
        todo.endDate = obj.endDate;
        todo.createDate = obj.createdAt;
        return todo;
      });
      this._source.next(todos);
      console.log(todos);
    });
    return [];
  }
}
