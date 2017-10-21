import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {Group} from '../../Models/group';
import {GroupService} from '../../Services/group.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private groupService: GroupService){}
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'Daily';

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    let name = this.signupForm.value.userData.name;
    let fre = this.signupForm.value.userData.fre;
    let duration = this.signupForm.value.userData.duration;
    let money = this.signupForm.value.userData.money;

    const group = new Group(name, fre, duration, money);
    this.groupService.addGroup(group);
    this.groupService.addUser(this.userService.user, group);

    this.router.navigateByUrl('/landing');
  }
}
