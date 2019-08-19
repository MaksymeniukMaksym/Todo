import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { TokenInterceptorService } from "../app/services/token-interceptor.service";
import { ClickOutsideModule } from "ng-click-outside";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { DialogComponent } from "./dialog/dialog.component";
import { TimeLeftPipe } from "./pipes/time-left.pipe";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import {
  TodoItemComponent,
  ClickStopPropagation
} from "./todo-item/todo-item.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import {
  MatDialogModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    ClickStopPropagation,
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DialogComponent,
    TimeLeftPipe,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    TodoComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
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
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
