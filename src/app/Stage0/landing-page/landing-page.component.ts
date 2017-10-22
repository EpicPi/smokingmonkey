import {Component, OnInit} from '@angular/core';
import {Group} from '../../Models/group';
import {UserService} from '../../Services/user.service';
import {GroupService} from '../../Services/group.service';
import {User} from '../../Models/user';
import {Router} from '@angular/router';
import {FirebaseService} from '../../Services/firebase.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  user: User;
  groups: Group[];

  constructor(private router: Router, private userService: UserService, private groupService: GroupService, private fb: FirebaseService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.groups = new Array<Group>();
    this.fb.getGroups().subscribe(res => {
      const groups = this.groupService.getGroups(res);
      for (let group of groups) {
        for (let us of group.userStats) {
          if (us.user.username === this.user.username) {
            this.groups.push(group);
          }
        }
      }
    });
  }

  selectGroup(group: Group) {
    this.groupService.group = group;
    this.router.navigateByUrl('/group');
  }

  makeGroup() {
    this.router.navigateByUrl('/groupCreate');
  }

  joinGroup() {
    this.router.navigateByUrl('/groupJoin');
  }


}
