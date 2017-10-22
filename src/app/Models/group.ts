import {UserStat} from './user.stat';
import {User} from './user';

export class Group {
  public userStats: UserStat[];
  public id: string;
  constructor(public name: string, public frequency: number, public duration: number, public money: number, id?: string) {
    this.userStats = new Array<UserStat>();
    this.id = '';
  }


}
