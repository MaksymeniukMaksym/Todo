import { TodoService } from "../todo.service";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../models/todo";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  public tasks: Todo[] = [];

  constructor(public todoService: TodoService, private http: HttpClient) {}

  ngOnInit() {
    this.todoService.source.subscribe((value: Todo[]) => {
      this.tasks = value;
      console.log(this.tasks);
    });
    this.http
      .get<any>(`${environment.apiUrl}/todo/all`)
      .subscribe((value: Todo[]) => {
        this.tasks = value;
        console.log(value);
      });
  }
}
