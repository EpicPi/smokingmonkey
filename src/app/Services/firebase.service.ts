import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {UserService} from './user.service';
import {GroupService } from './group.service';

@Injectable()
export class FirebaseService {

  constructor(private http: Http, private userService: UserService, private groupService: GroupService) { }
  storeUsers() {
  this.http.put('https://smokingmoney-45496.firebaseio.com/users.json', this.userService.returnUsers());
  }
  storeGroups() {
    this.http.put('https://smokingmoney-45496.firebaseio.com/groups.json', this.groupService.returnGroups());
  }

}
