import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth-guard.service";
import { UserGuard } from "./guards/user-guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./workstage/workstage.module").then(m => m.WorkstageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
