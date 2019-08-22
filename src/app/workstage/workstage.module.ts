import { WorkstageComponent } from "./workstage.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { SharedModule } from "../modules/shared.module";

const routes: Routes = [
  {
    path: "todo",
    component: WorkstageComponent,
    loadChildren: () => import("./todo/todo.module").then(m => m.TodoModule)
  },
  {
    path: "user",
    component: WorkstageComponent,
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  declarations: [WorkstageComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [WorkstageComponent, MenuComponent]
})
export class WorkstageModule {}
