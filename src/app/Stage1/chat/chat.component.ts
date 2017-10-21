import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../Models/group';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input()
  group: Group;

  constructor() {
  }

  ngOnInit() {
  }

}
