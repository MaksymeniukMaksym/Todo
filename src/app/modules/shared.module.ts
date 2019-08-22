import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { ClickOutsideModule } from "ng-click-outside";


import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import {
  MatDialogModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from "@angular/material";
import { DialogComponent } from '../workstage/todo/dialog/dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    // core
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd part
    NgxMaterialTimepickerModule,
    ClickOutsideModule,
    // material
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [DialogComponent],
    entryComponents: [DialogComponent],

  exports: [
    // core
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DialogComponent,
    // 3rd part
    NgxMaterialTimepickerModule,
    ClickOutsideModule,
    // material
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class SharedModule {}
