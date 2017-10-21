import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {User} from '../../Services/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    const user = new User(this.myForm.value.userName, this.myForm.value.password);
    localStorage.setItem('user', user.username);
    this.myForm.reset();
    this.router.navigateByUrl('/landing');
  }
}
