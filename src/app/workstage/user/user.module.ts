import { UserComponent } from "./user.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../modules/shared.module";


const routes: Routes = [{ path: "", component: UserComponent }];

@NgModule({
  declarations: [ UserComponent,],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [UserComponent,]
})
export class UserModule {}
