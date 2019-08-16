import { TokenInterceptorService } from './token-interceptor.service';
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
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
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
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { HttpClientModule , HTTP_INTERCEPTORS }   from '@angular/common/http';

@NgModule({
  declarations: [
    ClickStopPropagation,
    AppComponent,
    InputTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DialogComponent,
    TimeLeftPipe
  ],
  entryComponents: [DialogComponent],
  imports: [
    TokenInterceptorService,
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
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
