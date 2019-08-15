import { TimeTrackService } from './../time-track.service';
import { TodoService } from './../todo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../todo';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  serializedDate = new FormControl(Date());
  serializedTime = new FormControl(Date());
  constructor(
    public timeTrackService:TimeTrackService,
    private todoService:TodoService,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) { }

 
  saveChages(newName){
    console.log(`moment: ${moment(+this.serializedDate.value + this.timeTrackService.convertHours(this.serializedTime.value))}`)
    const Deadline = new Date(+this.serializedDate.value + this.timeTrackService.convertHours(this.serializedTime.value));
    console.log(`Deadline:${Deadline}`)
    this.data.deadLine = Deadline;
    this.data.title = newName.value;
    this.todoService.update(this.data.id,this.data)
    this.todoService.dialog.closeAll()   
  }

  ngOnInit() {
  }

}
