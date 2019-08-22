import { Todo } from "./todo";
import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
  name: 'effectively'
})
export class EffectivelyPipe implements PipeTransform {
   
  transform(todo: Todo): any {
    const deadline = moment(todo.deadLine);
    const endDate = moment(todo.endDate);
    if(!todo.complete){
    }else if(!!todo.deadLine && !!todo.endDate){
      if(+deadline - +endDate > 0){
        return `${moment.duration(+deadline - +endDate).humanize()} save`
      }else  return `${moment.duration(+deadline - +endDate).humanize()} waste`
    } 
    
   
    
  }
}
