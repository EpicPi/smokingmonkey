import {UserStat} from './user.stat';
import {User} from './user';

export class Group {
  public userStats: UserStat[];

  constructor(public name: string, public frequency: number, public duration: number, public money: number) {
    this.userStats = new Array<UserStat>();
  }



}
