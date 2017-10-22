import {UserStat} from './user.stat';
import {User} from './user';
import {Assignment} from './assignment';
import {assign} from 'rxjs/util/assign';

export class Group {
  public userStats: UserStat[];
  public id: string;
  public assignments: Assignment[];
  constructor(public name: string, public money: number, public current: Assignment, id?: string) {
    this.userStats = new Array<UserStat>();
    this.id = '';
    this.assignments = new Array<Assignment>();
    this.assignments.push(current);
  }


}
