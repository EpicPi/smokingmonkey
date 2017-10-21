import {Injectable, OnInit} from '@angular/core';
import {Group} from '../Models/group';
import {User} from '../Models/user';
import {UserStat} from '../Models/user.stat';
import {UserService} from './user.service';

@Injectable()
export class GroupService {

  public group: Group;
  public groups: Group[];

  constructor(private userService: UserService) {
    this.groups = new Array<Group>();
    this.groups.push(new Group('s', 1, 1, 1));
    // firbase dat ma boi
  }

  addUser(user: User, group: Group) {
    group.userStats.push(new UserStat(user, 0, group.money));
    this.userService.addGroup(group);
    // firebase that
  }

  getGroupByName(name: string) {
    for (let group of this.groups) {
      if (group.name === name) {
        return group;
      }
    }
    return null;
    // firebase this up
  }

  addGroup(group: Group) {
    this.groups.push(group);
    // firebase my friend
  }

}
