import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome = '-- not initialized yet --';
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.welcome = this.userService["isLoggedIn"] ?
      'Welcome, ' + this.userService["user"].name :
      'Please log in.';
  }

}
