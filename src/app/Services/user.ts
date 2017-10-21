import {Group} from './group';

export class User {
  constructor(public username: string, public password: string, public groups?: Group[]) {}
}
