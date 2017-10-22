import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {GroupService} from '../../Services/group.service';
import {Group} from '../../Models/group';
import {FirebaseService} from '../../Services/firebase.service';
import {User} from '../../Models/user';

@Component({
  selector: 'app-group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.css']
})
export class GroupJoinComponent implements OnInit {
  id: string;
  group: Group;
  groups: Group[];
  user: User;

  constructor(private router: Router, private userService: UserService, private groupService: GroupService, private fb: FirebaseService) {
  }

  ngOnInit() {
    this.fb.getGroups().subscribe(result => {
      this.groups = this.groupService.getGroups(result);
    });
    this.user = this.userService.user;
  }

  join(id: string) {
    if (this.groupByName(id)) {
      this.group = this.groupByName(id);
    }
  }

  accept() {
    this.groupService.addUser(this.userService.user, this.group);
    this.router.navigateByUrl('/landing');
    //nessie logic
  }

  groupByName(id: string): Group {
    for (let group of this.groups) {
      if (group.name === id) {
        return group;
      }
    }
    return null;
  }

}
