import { ServerResponse } from "./../../models/serverResponse.model";
import { Injectable } from "@angular/core";
import { User } from "../../models/User";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _currentUser = new BehaviorSubject<User>(null);
  public currentUser = this._currentUser.asObservable();

  constructor(private http: HttpClient) {
    this.getUser();
  }

  private getUser() {
    this.http
      .get<ServerResponse<User>>("api/api/users/me")
      .subscribe(({ data }) => {
        this._currentUser.next(data);
      });
  }

  public updateUser(firstName, lastName) {
    this.http
      .put<ServerResponse<User>>(`api/api/users/`, {
        firstName,
        lastName
      })
      .subscribe(({ data }) => {
        this._currentUser.next(data);
      });
  }
}
