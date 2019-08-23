import { Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  
  private isUserCabinet= false;

  constructor() { }
  

  toggleMode(){
    this.isUserCabinet = !this.isUserCabinet;
  }
}
