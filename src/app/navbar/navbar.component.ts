import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterContentChecked {
  userName: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngAfterContentChecked() {
    if (!this.userName && this.userService.user) {
      this.userName = this.userService.user.username;
    }
  }
  logOut(){
    this.userService.user = null;
    this.router.navigateByUrl('/');
  }

}
