import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {Group} from '../../Models/group';
import {GroupService} from '../../Services/group.service';
import {UserStat} from '../../Models/user.stat';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private groupService: GroupService){}
  defaultQuestion = 'Daily';

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log('doing it');
    let name = f.value['name'];
    let fre = f.value['fre'];
    let duration = f.value['duration'];
    let money = f.value['money'];

    const group = new Group(name, fre, duration, money);

    group.userStats.push(new UserStat(this.userService.user, 0, group.money));
    this.groupService.addGroup(group);

    this.router.navigateByUrl('/landing');
  }
}
