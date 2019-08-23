//Angular
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
//Module
import { SharedModule } from '../../modules/shared.module';
import { CommonModule } from "@angular/common";
//Component
import { TodoComponent } from "./todo.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import {
  TodoItemComponent,
} from "./todo-item/todo-item.component";
//Pipe
import { TimeLeftPipe } from "./time-left.pipe";
import { EffectivelyPipe } from '../todo/effectively.pipe';
import { ClickStopPropagationDirective } from './todo-item/click-stop-propagation.directive';

const routes: Routes = [
  { path: '', component: TodoComponent },    
];

@NgModule({
  declarations: [
    TodoComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TimeLeftPipe,
    EffectivelyPipe,
    ClickStopPropagationDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    TodoComponent,
    SharedModule,
  ]
})
export class TodoModule {}
