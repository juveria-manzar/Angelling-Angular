import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mathString;
  constructor(private request:RequestService) {
    this.request.makeRequest('http://numbersapi.com/100/math').then((value)=>{
      this.mathString=value;
    })
   }

  ngOnInit(): void {
  }
  public makeRequest(){
    this.request.makeRequest('http://numbersapi.com/100/math').then((value)=>{
      this.mathString=value;
    })
  }
}
