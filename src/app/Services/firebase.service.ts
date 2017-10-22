import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {UserService} from './user.service';
import {GroupService} from './group.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../Models/user';
import {Group} from '../Models/group';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  private url = 'https://smokingmoney-45496.firebaseio.com/';

  constructor(private http: Http) {
  }

  storeUsers() {
    // this.http.put('https://smokingmoney-45496.firebaseio.com/users.json', this.userService.returnUsers());
  }

  storeGroups() {
    // const body = JSON.stringify(this.groupService.groups[0]);
    // return this.http.post(this.url + 'groups/.json', body);
  }

  addUser(usr: User) {
    return this.http.post(this.url + 'users/.json', JSON.stringify(usr));
  }

  addGroup(group: Group) {
    return this.http.post(this.url + 'groups/.json', JSON.stringify(group));
  }

  setGroup(group: Group) {
    if (group.id) {
      return this.http.put(this.url + 'groups/' + group.id + '.json', JSON.stringify(group));
    }
    return null;
  }


  getGroups() {
    return this.http.get(this.url + 'groups/.json').map(result => result.json());
  }

}
