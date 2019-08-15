import { TodoService } from './../todo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  serializedDate = new FormControl(new Date());
  constructor(
    private todoService:TodoService,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) { }

 
  saveChages(newName){
    this.data.deadLine = this.serializedDate.value;
    this.data.title = newName.value;
    this.todoService.update(this.data.id,this.data)
    this.todoService.dialog.closeAll()   
  }

  ngOnInit() {
  }

}
