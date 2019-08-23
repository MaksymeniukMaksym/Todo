import { Todo } from "../../models/todo";
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
      const timeBenefit = moment.duration(+deadline - +endDate).humanize();
      if(+deadline - +endDate > 0){
        return `${timeBenefit} save`
      }else  return `${timeBenefit} waste`
    } 
    
   
    
  }
}
