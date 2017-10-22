import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './Services/user.service';
import {FirebaseService} from './Services/firebase.service';
import {GroupService} from './Services/group.service';
import {Group} from './Models/group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private fb: FirebaseService, private groupService: GroupService) {
  }

  ngOnInit(): void {
    if (!this.userService.user) {
      this.router.navigateByUrl('/');
    }
  }
}
