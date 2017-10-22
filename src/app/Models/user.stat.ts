import {Group} from './group';
import {User} from './user';

export class UserStat {
  constructor(public user: User, public penalties: number, public money: number) {
  };
}
