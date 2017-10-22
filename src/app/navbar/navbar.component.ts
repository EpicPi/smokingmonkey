import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterContentChecked {
  userName: string;

  constructor(private userService: UserService) {
  }

  ngAfterContentChecked() {
    if (!this.userName && this.userService.user) {
      this.userName = this.userService.user.username;
    }
  }

}
