import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../Services/group.service';
import {Group} from '../../Models/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: Group;
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.group = this.groupService.group;
  }

}
