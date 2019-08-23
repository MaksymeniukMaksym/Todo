import { TodoService } from "../todo.service";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../models/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  public tasks: Todo[] = [];

  constructor(public todoService: TodoService) {}


  ngOnInit() {
    this.todoService.source.subscribe((value: Todo[]) => {
      this.tasks = value;
    });
  }
}
