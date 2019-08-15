import { Todo } from "./../todo";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeLeft"
})
export class TimeLeftPipe implements PipeTransform {
  test1 = new Date("2019/08/15 24:00:00");
  test2 = new Date("2019/08/15 00:00:00");
  public curentTime = new Date();
  transform(todo: Todo): any {
    //3600000 - 1 hour
    //60000 - 1 minute

    console.log(`value:${todo.deadLine}`);
    if (todo.complete === false) {
      if (todo.deadLine !== undefined) {
        if (+todo.deadLine - +this.curentTime > 0) {
          if (Math.floor((+todo.deadLine - +this.curentTime) / 86400000) > 0) {
            if (Math.floor((+todo.deadLine - +this.curentTime) / 86400000) == 1) {
              return `1 day remaining`;
            } else return `${Math.floor((+todo.deadLine - +this.curentTime) / 86400000)} days remaining`;
          } else return "Deadline Today";
        } else return "Outdated";
      } else return "";
    }else return `done at ${this.curentTime.toDateString()}`

    // if (todo.complete !== false) {
    //   return `done at ${this.curentTime.toDateString()}`
    // }else if (todo.deadLine === undefined) {
    //   return "";
    // } else if (+todo.deadLine - +this.curentTime > 0) {
    //   if (Math.floor((+todo.deadLine - +this.curentTime) / 86400000) > 0) {
    //     if (Math.floor((+todo.deadLine - +this.curentTime) / 86400000) == 1) {
    //       return `1 day remaining`;
    //     } else return `${Math.floor((+todo.deadLine - +this.curentTime) / 86400000)} days remaining`;
    //   } else return "Deadline Today";
    // } else return "Outdated";
  }
}



