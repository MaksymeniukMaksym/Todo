import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>("api/auth/register", {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    });
  }
  loginUser(email,password) {
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
