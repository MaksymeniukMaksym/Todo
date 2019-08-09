import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _source = new BehaviorSubject<Todo[]>([]);
  public source = this._source.asObservable();
  public increment = 0;
  constructor() {}

  create(value: string) {
    const task = new Todo();
    task.title = value;
    task.date = new Date();
    task.id = this.increment + 1;
    task.complete = false;
    this.increment = this.increment + 1;
    const arr = this._source.getValue();
    arr.push(task);
    this._source.next(arr);
  }

  delete({ id }) {
    const array = this._source.getValue();
    const index = array.map(item => item.id).indexOf(id);
    if (index !== -1) {
      array.splice(index, 1);
      this._source.next(array);
    }
  }
}
