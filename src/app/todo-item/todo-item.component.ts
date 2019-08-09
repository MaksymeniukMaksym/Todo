import { TodoService } from '../todo.service';
import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo; 

  constructor( private todoService: TodoService ) { }

  isComplete(value){
    console.log(value);
    value.complete = true;
  }

  DeleteTask(value){
    this.todoService.delete(value);
  }

  ngOnInit() {
  }

}
