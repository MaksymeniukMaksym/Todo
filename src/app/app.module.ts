import { BrowserModule } from "@angular/platform-browser";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClickOutsideModule } from 'ng-click-outside';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { NgModule } from '@angular/core';


import { MatButtonModule, MatDatepickerModule,MatNativeDateModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge"
@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDatepickerModule,
    ClickOutsideModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
