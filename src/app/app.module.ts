//Angular
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Module
import { SharedModule } from './modules/shared.module';
import { AppRoutingModule } from "./app-routing.module";

//Component
import { AppComponent } from "./app.component";

//Interceptor
import { TokenInterceptorService } from "./interceptors/token-interceptor.service";

//Angular-material
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
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
