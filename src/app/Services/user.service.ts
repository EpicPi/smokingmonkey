import {Injectable} from '@angular/core';
import {User} from '../Models/user';
import {Group} from '../Models/group';

@Injectable()
export class UserService {

  constructor() {
  }


  public user: User;

  addGroup(group: Group) {
    this.user.groups.push(group);
    //firebase stuff
  }
}
