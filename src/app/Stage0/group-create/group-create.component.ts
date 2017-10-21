import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'Daily';
  user = {
    name: '',
    fre: '',
    duration: ''
  };
  submitted = false;
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.fre = this.signupForm.value.userData.fre;
    this.user.duration = this.signupForm.value.userData.duration;
    console.log(form);

    this.signupForm.reset();

  }
}
