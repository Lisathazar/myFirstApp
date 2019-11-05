import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  User = {
    name: '',
    email: '',

  };


  onSubmit(user){
    this.User.name = user.name;
    this.User.email = user.email;
  }
}
