import { Todo } from "../../models/todo";
import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "timeLeft"
})
export class TimeLeftPipe implements PipeTransform {
  public curentTime = new Date();
  transform(todo: Todo): any {
    const deadLine = moment(todo.deadLine);

    if (todo.complete !== false) {
      return `Done at ${moment(todo.endDate).format("lll")}`;
    }

    if (todo.deadLine === null) {
      return "";
    }
    const timeHumanize = moment
      .duration(+deadLine - +this.curentTime)
      .humanize();

    if (+deadLine - +this.curentTime < 0) {
      return `${timeHumanize} ago`;
    }

    return `${timeHumanize}  remaining`;
  }
}
