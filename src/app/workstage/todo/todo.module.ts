import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from '../../modules/shared.module';
import { CommonModule } from "@angular/common";

import { TodoComponent } from "./todo.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import {
  TodoItemComponent,
  ClickStopPropagation
} from "./todo-item/todo-item.component";
import { TimeLeftPipe } from "./time-left.pipe";
import { EffectivelyPipe } from '../todo/effectively.pipe';
// import { MenuComponent } from '../menu/menu.component';
// import { UserComponent } from './user/user.component';



const routes: Routes = [
  { path: '', component: TodoComponent },
    
];

@NgModule({
  declarations: [
    // UserComponent,
    // MenuComponent,
    TodoComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    ClickStopPropagation,
    TimeLeftPipe,
    EffectivelyPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    // UserComponent,
    // MenuComponent,
    TodoComponent,
    SharedModule,
  ]
})
export class TodoModule {}
