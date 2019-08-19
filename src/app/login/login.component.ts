import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  constructor( private auth:AuthService,
                public router:Router) {}

  ngOnInit() {}
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("")
  });

  onSubmit(){

    const email = this.form.get("email").value;
    const password = this.form.get("password").value;

    this.auth.loginUser(email, password).subscribe(({ token }) => {
      localStorage.setItem("token",token);
      this.router.navigateByUrl("/todo")
    })
  }

  getErrorMessage() {
    return this.form.get("email").hasError("required")
      ? "You must enter a value"
      : this.form.get("email").hasError("email")
      ? "Not a valid email"
      : "";
  }
}
