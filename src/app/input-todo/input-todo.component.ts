import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.scss"]
})
export class InputTodoComponent implements OnInit {
  isInputValid = false;

  constructor(private todoService: TodoService) {}

  validateInput(event) {
    this.isInputValid = event.target.value !== '' ? true : false; 
  }

  getHeader(value) {
    this.todoService.create(value);
  }

  ngOnInit() {}
}
