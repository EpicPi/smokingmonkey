import {Injectable} from '@angular/core';
import {User} from '../Models/user';
import {Group} from '../Models/group';

@Injectable()
export class UserService {

  constructor() {
  }


  public user: User;

  join(group: Group) {
    // let g = new Group(id);
    // this.user.groups.push(g);
  }

  addGroup(group: Group) {
    this.user.groups.push(group);
    //firebase stuff
  }
}
