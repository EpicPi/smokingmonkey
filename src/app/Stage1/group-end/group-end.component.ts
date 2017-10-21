import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../Services/group.service';

@Component({
  selector: 'app-group-end',
  templateUrl: './group-end.component.html',
  styleUrls: ['./group-end.component.css']
})
export class GroupEndComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

}
