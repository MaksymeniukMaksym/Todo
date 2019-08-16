import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private http:HttpClient,
  ) { }

  registerUser(user){
    return this.post<any>("ADRESS", user)
  }
  post<T>(arg0: string, user: any) {
    throw new Error("Method not implemented.");
  }
 

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
