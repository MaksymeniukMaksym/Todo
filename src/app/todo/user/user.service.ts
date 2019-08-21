import { Injectable } from "@angular/core";
import { User } from "./User";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(user:User) {
    this.http.get<any>("api/api/users/me")
    .subscribe(({ data }) => {
      user.email = data.email;
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.isAdmin = data.isAdmin;
      user.id = data.id;
      return user;
    });
  }
}
