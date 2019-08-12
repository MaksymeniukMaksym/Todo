import { TodoService } from "../todo.service";
import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;
  isDeleteMode = false;

  constructor(private todoService: TodoService) {}

  toggleComplete(todo: Todo) {
    todo.complete = true;
    this.todoService.update(todo.id, todo);
  }
  toggleDeleteMode() {
    this.isDeleteMode = !this.isDeleteMode;
    }
    onclickOutside(){
    this.isDeleteMode = !this.isDeleteMode;  
  }

  DeleteTask(value) {
    this.todoService.delete(value);
  }

  ngOnInit() {}
}
