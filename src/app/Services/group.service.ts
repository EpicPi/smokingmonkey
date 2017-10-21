import { Injectable } from '@angular/core';
import { Group } from './group';
@Injectable()
export class GroupService {

  constructor() { }
  private groups: Group[] = [
    new Group('first')
  ];
  returnGroups () {
    return this.groups;
  }
}
