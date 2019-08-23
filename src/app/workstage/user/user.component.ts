import { User } from "../../models/User";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "./user.service";


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public user = new User();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  saveUserInfo(newFirstName, newLastName) {
    console.log("saveUserInfo");
    this.userService.updateUser(newFirstName.value, newLastName.value);
  }
}
