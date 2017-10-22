import {Injectable, OnInit} from '@angular/core';
import {Group} from '../Models/group';
import {User} from '../Models/user';
import {UserStat} from '../Models/user.stat';
import {UserService} from './user.service';
import {FirebaseService} from './firebase.service';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class GroupService {

  public group: Group;
  public groups: Group[];

  constructor(private fb: FirebaseService) {
    // this.groups = new Array<Group>();
    const group = new Group('s', 1, 1, 1);
    const usr = new User('jo2', 'lol');
    group.userStats.push(new UserStat(usr, 0, group.money));
    this.groups = [group];

    // firbase dat ma boi
  }

  addUser(user: User, group: Group) {
    group.userStats.push(new UserStat(user, 0, group.money));
    this.setGroup(this.group);
  }

  getGroups(result: any) {
    const groups = new Array<Group>();
    for (let k in result) {
      groups.push(result[k]);
    }
    return groups;
  }

  setGroup(group: Group) {
    this.fb.setGroup(group).subscribe(console.log);
  }

  addGroup(group: Group) {
    this.fb.addGroup(group).subscribe(result => {
      group.id = result.json()['name'];
      this.setGroup(group);
    });
  }

}
