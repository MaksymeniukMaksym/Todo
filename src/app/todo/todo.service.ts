import { DialogComponent } from "./dialog/dialog.component";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo";
import { MatDialog } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _source = new BehaviorSubject<Todo[]>([]);
  public source = this._source.asObservable().pipe(
    tap(todos => {
      console.log(todos);
      this._benefitSource.next(this.userEffectively());
    })
  );

  private _benefitSource = new BehaviorSubject<string>("");
  public benefitSource = this._benefitSource.asObservable();

  constructor(public dialog: MatDialog, private http: HttpClient) {
    this._source.next(this.getTodos());
  }
  clear() {
    this._source.next([]);
  }

  create(value: string) {
    this.http
      .post<any>("api/api/todos", {
        description: value
      })
      .subscribe(({ data }) => {
        const todo = this.mapTodo(data);
        const todos = this._source.getValue();
        todos.push(todo);
        this._source.next(todos);
      });
  }

  update(id, todo) {
    this.http
      .put(`api/api/todos/${id}`, {
        description: todo.title,
        completed: todo.complete,
        dueDate: todo.deadLine
      })
      .subscribe(() => {
        const todos = this._source.getValue();
        const index = todos.findIndex(todo => todo.id === id);
        todos[index] = todo;
        this._source.next(todos);
      });
  }

  complete(id) {
    this.http
      .put(`api/api/todos/${id}/complete`, {})
      .subscribe(({ data }: any) => {
        const todo = this.mapTodo(data);
        const todos = this._source.getValue();
        const index = todos.findIndex(todo => todo.id === id);
        todos[index] = todo;
        this._source.next(todos);
      });
  }

  userEffectively(): string {
    const todos = this._source.getValue();

    const benefit = todos.reduce((sum: number, todo: Todo) => {
      const deadline = +moment(todo.deadLine);
      const endDate = +moment(todo.endDate);

      if (!todo.complete) {
        return sum;
      }
      if (!(deadline && endDate)) {
        return sum;
      }
      return sum + (deadline - endDate);
    }, 0);

    if (benefit < 0) {
      return `You have lost ${moment.duration(benefit).humanize()}`;
    }
    if (benefit == 0) {
      return `Please complete tasks with deadline`;
    }

    return `You saved ${moment.duration(benefit).humanize()}`;
  }

  delete({ id }) {
    this.http.delete(`api/api/todos/${id}`).subscribe(() => {
      const todos = this._source.getValue();
      const indexForRemove = todos.findIndex(todo => todo.id == id);
      todos.splice(indexForRemove, 1);
      this._source.next(todos);
    });
  }
  public openDialog(todo: Todo) {
    this.dialog.open(DialogComponent, { data: todo });
  }

  public getTodos(): Todo[] {
    this.http.get<any>("api/api/todos").subscribe(({ data }) => {
      const todos = data.map(obj => this.mapTodo(obj));
      this._source.next(todos);
      this._benefitSource.next(this.userEffectively());
    });
    return [];
  }

  mapTodo(data): Todo {
    const todo = new Todo();
    todo.id = data.id;
    todo.title = data.description;
    todo.complete = data.completed;
    todo.deadLine = data.dueDate;
    todo.endDate = data.endDate;
    todo.createDate = data.createdAt;
    return todo;
  }
}
