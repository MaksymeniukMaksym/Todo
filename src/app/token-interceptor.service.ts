import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {
  
  // intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
  //   throw new Error("Method not implemented.");
  // }

  

  constructor( private injector: Injector ) { }


  intercept(req, next){
    let authService = this.injector.get(AuthService)
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${authService.getToken()}`
      }
    }).throw(new Error("Method not implemented."));
    return next.handle(tokenizedReq)
  }
}
