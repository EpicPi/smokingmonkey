import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);

    this.myForm.reset();
  }
}
