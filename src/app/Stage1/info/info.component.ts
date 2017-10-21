import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from '../../Services/group.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
  }

}
