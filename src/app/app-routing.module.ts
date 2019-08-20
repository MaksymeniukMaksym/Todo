import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "todo", loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),canActivate:[AuthGuardService] },
  { path: "", redirectTo: "/todo", pathMatch: "full",canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
