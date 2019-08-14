import { TodoService } from "./todo.service";
import { Injectable } from "@angular/core";
import { Todo } from "./todo";
TodoService;
@Injectable({
  providedIn: "root"
})
export class TimeService {
  constructor(public todoService: TodoService) {}

  public CheckOutDate(todo: Todo) {
    let now = new Date();
    console.log(`now: ${todo.createDate}`);
    console.log(`deadline: ${todo.deadLine}`);

    if (now > todo.deadLine) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}
