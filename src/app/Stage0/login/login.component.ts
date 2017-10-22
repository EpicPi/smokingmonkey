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
  myForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.myForm.get('userName').setValue('George Burdell');
    this.myForm.get('password').setValue('123');
  }

  onSubmit() {
    //this stuff should get replaced by firebase
    if (this.joe.username === this.myForm.value.userName && this.joe.password === this.myForm.value.password) {
      this.userService.user = this.joe;
      this.router.navigateByUrl('/landing');
    }
    this.myForm.reset();
  }
}
