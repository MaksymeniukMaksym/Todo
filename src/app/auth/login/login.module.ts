//Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
//Module
import { SharedModule } from "../../modules/shared.module";
//Component
import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: "", component: LoginComponent},
 
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
