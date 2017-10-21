import { Component, OnInit } from '@angular/core';
import {Group} from '../../Services/group';
import {UserService} from '../../Services/user.service';
import {GroupService} from '../../Services/group.service';
import {User} from '../../Services/user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private groupService: GroupService) { }

  ngOnInit() {
    this.user = this.userService.user;
    }

  selectGroup(group: Group) {
    this.groupService.group = group;
  }


}
