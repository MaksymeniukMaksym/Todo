import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class TimeTrackService {

  constructor() { }

  convertHours(date){
   const arr = date.split(/:/);
   const value = (arr[0]*3600000) + (arr[1]* 60000);
    return(value);    
  }

  dateNow(){
    return moment.now()
  }

}
