import {Component, OnInit} from '@angular/core';
import {Group} from '../../Services/group';
import {UserService} from '../../Services/user.service';
import {GroupService} from '../../Services/group.service';
import {User} from '../../Services/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  user: User;

  constructor(private router: Router, private userService: UserService, private groupService: GroupService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  selectGroup(group: Group) {
    this.groupService.group = group;
    this.router.navigateByUrl('/group');
  }

  makeGroup() {
   this.router.navigateByUrl('/groupCreate');
  }

  joinGroup(){
    this.router.navigateByUrl('/groupJoin');
  }


}
