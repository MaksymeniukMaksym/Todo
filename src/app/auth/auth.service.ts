import { ServerResponse } from './../models/serverResponse.model';
import { User } from './../models/User';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators'
import { authResponse } from '../models/authResponse.model';

@Injectable({
  providedIn: "root"
})

export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public registerUser(firstName, lastName, email, password) {
    localStorage.clear();
    return this.http.post<User>("api/auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).pipe(tap(() => {
      this.router.navigateByUrl("/auth/login");
    }) );
    
  }
  public loginUser(email, password) {
    localStorage.clear();
    return this.http.post<authResponse>("api/auth/login", {
      email: email,
      password: password
    }).pipe(tap(({token}) =>{
      localStorage.setItem("token",token);
      this.router.navigateByUrl("/todo")
    } ) );
  }

  public loggedIn() {
    return !!localStorage.getItem("token");
  }

  public getToken() {
    return localStorage.getItem("token");
  }
}
