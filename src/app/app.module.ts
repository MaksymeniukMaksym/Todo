import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClickOutsideModule } from "ng-click-outside";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent, ClickStopPropagation } from "./todo-item/todo-item.component";
import { NgModule } from "@angular/core";

import {
  MatDialogModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    ClickStopPropagation,
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
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
    FormsModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
