import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from '../../Services/group.service';
import {UserStat} from '../../Models/user.stat';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  userStats: UserStat[];
  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.userStats = this.groupService.group.userStats;
  }

}
