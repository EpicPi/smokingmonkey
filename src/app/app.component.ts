import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.userService.user) {
      this.router.navigateByUrl('/');
    }
  }
}
