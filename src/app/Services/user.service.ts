import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class UserService {

  constructor() { }
  private billy: User = new User('Billy', 'sfa');
}
