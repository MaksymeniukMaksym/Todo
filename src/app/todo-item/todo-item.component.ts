
import { TodoService } from "../todo.service";
import {
  Component,
  OnInit,
  Input,
  HostListener,
  Directive
} from "@angular/core";
import { Todo } from "../todo";

@Directive({
  selector: "[click-stop-propagation]"
})
export class ClickStopPropagation {
  constructor(public todoItemComponent: TodoItemComponent) {}
 
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;
  ngOnInit() {}
  public wasInside = false;
  isDeleteMode = false;
  description = "";
 
  

  constructor(
    private todoService: TodoService,
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
    this.todoService.update(todo.id, todo);
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
