import { TodoService } from "../todo.service";
import { FormControl } from "@angular/forms";
import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from "@angular/core";
import { Todo } from "../todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;

  ngOnInit() {}
  private wasInside = false;
  isChangeMode = false;
  isDeleteMode = false;
  description = "";
  serializedDate = new FormControl(new Date());
  constructor(private todoService: TodoService, private eRef: ElementRef) {}

  @HostListener("click")
  clickInside() {
    this.wasInside = true;
  }

  @HostListener("document:click")
  clickout() {
    if (!this.wasInside) {
      // this.isChangeMode = false;
      this.isDeleteMode = false;
    }
    this.wasInside = false;
  }

  toggleComplete(todo: Todo) {
    todo.complete = true;
    this.todoService.update(todo.id, todo);
  }
  toggleDeleteMode() {
    this.isDeleteMode = !this.isDeleteMode;
  }
  
  saveChages(todo: Todo) {
    todo.deadLine = this.serializedDate.value;
    this.todoService.update(todo.id, todo);
  }
     DeleteTask(value) {
    this.todoService.delete(value);
  }
}
