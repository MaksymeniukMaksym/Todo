//Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
//Module
import { SharedModule } from "../../modules/shared.module";
//Component
import { RegisterComponent } from "./register.component";

const routes: Routes = [
  { path: "", component: RegisterComponent},
 
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [RegisterComponent]
})
export class RegisterModule {}
