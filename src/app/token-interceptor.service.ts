import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {
  
  // intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
  //   throw new Error("Method not implemented.");
  // }

  

  constructor( private authService: AuthService ) { }


  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq)
  }
}
