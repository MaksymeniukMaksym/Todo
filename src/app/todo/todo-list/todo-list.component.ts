import { TodoService } from "../todo.service";
import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Todo } from "../todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  tasks: Todo[] = [];

  constructor(private todoService: TodoService) {}

  benefit : string;


  ngOnInit() {

    this.todoService.benefitSource.subscribe((value: string) => {
      this.benefit = value;
    })

    this.todoService.source.subscribe((value: Todo[]) => {
      this.tasks = value;
      // this.onBenefit();
    });
  }
}
