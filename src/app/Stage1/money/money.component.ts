import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../Services/group.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

}
