import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class UserService {

  constructor() { }
  private users: User[] = [
    new User('Billy', 'sfa')
  ];
  returnUsers() {
    return this.users;
  }
}
