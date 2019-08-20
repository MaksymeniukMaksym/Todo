import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators'
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  registerUser(firstName, lastName, email, password) {
    localStorage.clear();
    return this.http.post<any>("api/auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).pipe(tap(() => {
      this.router.navigateByUrl("/login");
    }) );
    
  }
  loginUser(email, password) {
    localStorage.clear();
    return this.http.post<any>("api/auth/login", {
      email: email,
      password: password
    }).pipe(tap(({token}) =>{
      localStorage.setItem("token",token);
      this.router.navigateByUrl("/todo")
    } ) );
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
