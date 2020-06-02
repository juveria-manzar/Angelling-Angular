import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData={
    email:"",
    pass:""
  }
  createUser(): void{
    console.log('user created')
    console.log(this.userData.email);
    console.log(this.userData.pass);
  }
}
