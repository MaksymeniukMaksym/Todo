import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, public router: Router) {}

  ngOnInit() {}

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  onSubmit() {
    const email = this.form.get("email").value;
    const password = this.form.get("password").value;
    const firstName = this.form.get("firstName").value;
    const lastName = this.form.get("lastName").value;

    this.auth
      .registerUser(firstName, lastName, email, password)
      .subscribe(() => {
console.log("success")
        this.router.navigateByUrl("/login");
      });
  }

  getErrorMessage() {
    return this.form.get("email").hasError("required")
      ? "You must enter a value"
      : this.form.get("email").hasError("email")
      ? "Not a valid email"
      : "";
  }
}
