import { TodoListComponent } from "./../todo-list/todo-list.component";
import { TimeTrackService } from "../time-track.service";
import { TodoService } from "../todo.service";

import { Component, Input, HostListener, Directive } from "@angular/core";
import { Todo } from "../../../models/todo";


@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent {
  @Input() task: Todo;

  private wasInside = false;
  private isDeleteMode = false;

  constructor(
    private todoService: TodoService,
    public timeTrackService: TimeTrackService,
    public todoList: TodoListComponent
  ) {}

  @HostListener("click")
  clickInside() {
    this.openDialogService();
    this.wasInside = true;
  }

  @HostListener("document:click")
  clickout() {
    if (!this.wasInside) {
      this.isDeleteMode = false;
    }
    this.wasInside = false;
  }

  toggleComplete(todo: Todo) {
    todo.complete = true;
    this.todoService.complete(todo.id);
  }
  toggleDeleteMode() {
    this.isDeleteMode = !this.isDeleteMode;
  }

  openDialogService() {
    this.todoService.openDialog(this.task);
  }

  DeleteTask(value) {
    this.todoService.delete(value);
  }
}
