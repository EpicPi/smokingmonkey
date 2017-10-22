import {Grade} from './grade';

export class Assignment {
  constructor(public name: string, public grades?: Grade[]) {
    this.grades = new Array<Grade>();
  }
}
