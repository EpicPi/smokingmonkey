import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {User} from '../../Models/user';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {Group} from '../../Models/group';
import {UserStat} from '../../Models/user.stat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  joe = new User(
    'George Burdell',
    '123',
  );
  joe2 = new User(
    'joe joey',
    '123'
  );
  myForm: FormGroup;
  userName = 'George Burdell';
  password = '123';

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    //this stuff should get replaced by firebase
    if (this.joe.username === this.userName && this.joe.password === this.password) {
      this.userService.user = this.joe;
    } else {
      this.userService.user = this.joe2;
    }

    this.router.navigateByUrl('/landing');
  }
}
