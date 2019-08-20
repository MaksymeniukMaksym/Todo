import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from '../modules/shared.module';
import { CommonModule } from "@angular/common";

import { TodoComponent } from "./todo.component";
import { MenuComponent } from "../menu/menu.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import {
  TodoItemComponent,
  ClickStopPropagation
} from "./todo-item/todo-item.component";
// import { DialogComponent } from "src/app/todo/dialog/dialog.component";
import { TimeLeftPipe } from "./time-left.pipe";



const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [
    // DialogComponent,
    MenuComponent,
    TodoComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    ClickStopPropagation,
    TimeLeftPipe
  ],
  // entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    // DialogComponent,
    TodoComponent,
  ]
})
export class TodoModule {}
