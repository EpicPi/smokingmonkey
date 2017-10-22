import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../Services/group.service';
import {Group} from '../../Models/group';
import {UserStat} from '../../Models/user.stat';
import {Grade} from '../../Models/grade';
import {UserService} from '../../Services/user.service';
import {group} from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  userStats: UserStat[];
  yourGrade: number;
  submitted = false;
  newAssessment: string;
  constructor(private groupService: GroupService, private userService: UserService) {
  }

  ngOnInit() {
    this.userStats = this.groupService.group.userStats;
    console.log(this.groupService.group);
    if(this.groupService.group.current.grades)
    for (let grade of this.groupService.group.current.grades) {
      if (grade.user.username === this.userService.user.username) {
        this.yourGrade = grade.grade;
        this.submitted = true;
      }
    }
  }

  submit() {
    if(!this.groupService.group.current.grades)
    this.groupService.group.current.grades = new Array<Grade>();
    this.groupService.group.current.grades.push(new Grade(this.userService.user, this.yourGrade));
    this.groupService.setGroup(this.groupService.group);
    this.submitted = true;
  }

  update() {
    for (let grade of this.groupService.group.current.grades) {
      if (grade.user === this.userService.user)
        grade.grade = this.yourGrade;
    }
    this.groupService.setGroup(this.groupService.group);
    this.submitted = true;
  }
}
