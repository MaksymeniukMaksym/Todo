import { TodoService } from './../todo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../todo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    private todoService:TodoService,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) { }

  changeName(newName){
    this.data.title = newName.value;
    this.todoService.update(this.data.id,this.data)
    this.todoService.dialog.closeAll()   
  }

  ngOnInit() {
  }

}
