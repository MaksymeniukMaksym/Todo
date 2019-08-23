//Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
//Module
import { SharedModule } from "../modules/shared.module";
//Component
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "register",
    component: AuthComponent,
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterModule)
  }
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [AuthComponent]
})
export class AuthModule {}
