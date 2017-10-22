import {Grade} from './grade';

export class Assignment {
  public grades: Grade[];
  constructor(public name: string) {
    this.grades = new Array<Grade>();
  }
}
