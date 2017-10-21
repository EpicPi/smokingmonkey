import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../Services/group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  constructor(private router: Router, private groupService: GroupService) {
  }

  ngOnInit() {
  }

  response(type: number) {
    if (type === 1) {
      //number of times good ++
    }
    else {
      //number of time bad ++
      //money --
    }
    this.router.navigateByUrl('/group');
  }

}
