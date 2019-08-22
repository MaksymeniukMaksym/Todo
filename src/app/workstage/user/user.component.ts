import { User } from './User';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public user = new User(); 
  getUserInfo(){
    this.userService.getUser(this.user);
    console.log(this.user)
  }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getUserInfo()
  }

  redirectTodo(){
    this.router.navigateByUrl("/todo");
  }
}
