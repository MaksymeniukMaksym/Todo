import { environment } from "./../../../environments/environment";
import { ServerResponse } from "./../../models/serverResponse.model";
import { DialogComponent } from "./dialog/dialog.component";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../../models/todo";
import { MatDialog } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import * as moment from "moment";
import { TodoServer } from "src/app/models/todoServer.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private _source = new BehaviorSubject<Todo[]>([]);
  public source = this._source.asObservable().pipe(
    tap((todos) => {
      this._benefitSource.next(this.userEffectively());
    })
  );

  private _benefitSource = new BehaviorSubject<string>("");
  public benefitSource = this._benefitSource.asObservable();

  constructor(public dialog: MatDialog, private http: HttpClient) {
    this._source.next(this.getTodos());
  }
  public clear() {
    this._source.next([]);
  }

  public create(value: string) {
    this.http
      .post<ServerResponse<TodoServer>>("api/todo", {
        title: value,
      })
      .subscribe((data) => {
        const todo = this.mapTodo(data);
        const todos = this._source.getValue();
        todos.push(todo);
        this._source.next(todos);
      });
  }

  public update(id, todo) {
    console.log('update')
    this.http
      .put(`api/todo/${id}/update`, {
        title: todo.title,
        complete: todo.complete,
        deadLine: todo.deadLine,
      })
      .subscribe(() => {
        const todos = this._source.getValue();
        const index = todos.findIndex((todo) => todo.id === id);
        todos[index] = todo;
        this._source.next(todos);
      });
  }

  public complete(id) {
    this.http.put(`api/todo/${id}/complete`, {}).subscribe((data: Todo) => {
      console.log(data);
      const todo = this.mapTodo(data);
      const todos = this._source.getValue();
      const index = todos.findIndex((todo) => todo.id === id);
      todos[index] = todo;
      this._source.next(todos);
    });
  }

  public userEffectively(): string {
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

    const timeBenefit = moment.duration(benefit).humanize();
    if (benefit < 0) {
      return `You have lost ${timeBenefit}`;
    }
    if (benefit == 0) {
      return `Please complete tasks with deadline`;
    }

    return `You saved ${timeBenefit}`;
  }

  public delete({ id }) {
    this.http.delete(`api/todo/${id}`).subscribe(() => {
      const todos = this._source.getValue();
      const indexForRemove = todos.findIndex((todo) => todo.id == id);
      todos.splice(indexForRemove, 1);
      this._source.next(todos);
    });
  }
  public openDialog(todo: Todo) {
    this.dialog.open(DialogComponent, { data: todo });
  }

  public getTodos(): Todo[] {
    this.http
      .get<Todo[]>(`${environment.apiUrl}/todo/all`)
      .subscribe((data) => {
        console.log(data);
        const todos = data.map((obj) => this.mapTodo(obj));
        this._source.next(todos);
        this._benefitSource.next(this.userEffectively());
      });
    return [];
  }

  private mapTodo(data): Todo {
    const todo = new Todo();
    todo.id = data.id;
    todo.title = data.title;
    todo.complete = data.complete;
    todo.deadLine = data.deadLine;
    todo.endDate = data.endDate;
    todo.createDate = data.createDate;
    return todo;
  }
}
