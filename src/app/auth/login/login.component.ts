import { AuthService } from "../auth.service";
import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  
  public form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("")
  });

  constructor(private auth: AuthService) {}

  onSubmit() {
    const email = this.form.get("email").value;
    const password = this.form.get("password").value;

    this.auth.loginUser(email, password).subscribe();
  }

  getErrorMessage() {
    return this.form.get("email").hasError("required")
      ? "You must enter a value"
      : this.form.get("email").hasError("email")
      ? "Not a valid email"
      : "";
  }
}
