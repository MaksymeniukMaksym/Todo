import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(firstName, lastName, email, password) {
    return this.http.post<any>("api/auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    
  }
  loginUser(email, password) {
    localStorage.clear();
    return this.http.post<any>("api/auth/login", {
      email: email,
      password: password
    });
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
