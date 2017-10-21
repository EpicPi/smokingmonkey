import {Injectable} from '@angular/core';
import {User} from './user';
import {Group} from './group';

@Injectable()
export class UserService {

  constructor() {
  }

  private billy: User = new User('Billy', 'sfa');

  public user: User;

  join(id: string) {
    let g = new Group(id);
    this.user.groups.push(g);
  }
}
