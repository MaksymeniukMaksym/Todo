import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    ClickOutsideModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
