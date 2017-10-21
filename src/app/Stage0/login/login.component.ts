import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {User} from '../../Services/user';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {Group} from '../../Services/group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  groups = [new Group('hi'), new Group('bye')];
  joe = new User(
    'joe',
    '123',
    this.groups
  );
  myForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.myForm.get('userName').setValue('joe');
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
