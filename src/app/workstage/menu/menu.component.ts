import { UserService } from './../user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public userinfo = new User(); 
  getUserInfo(){
    this.userService.getUser(this.userinfo);
    console.log(this.userinfo)
  }
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  onUserCabinet(){
    this.router.navigateByUrl("/user");
  }

  onLoggout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
