import {Injectable} from '@angular/core';
import {User} from './user';
import {Group} from './group';

@Injectable()
export class UserService {

  constructor() {
  }



  public user: User;

  join(id: string) {
    let g = new Group(id);
    this.user.groups.push(g);
  }
}
