import { UserService } from './../user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public userInfo = new User(); 

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
      this.userService.currentUser.subscribe(user => {
        this.userInfo = user;
      })
  }

  onUserCabinet(){
    this.router.navigateByUrl("/user");
  }

  onLoggout(){
    localStorage.clear();
    this.router.navigateByUrl("/auth/login");
  }
}
