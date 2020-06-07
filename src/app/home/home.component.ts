import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request:RequestService) { }

  ngOnInit(): void {
  }
  public makeRequest(){
    console.log('making request')
    this.request.makeRequest('http://numbersapi.com/100/math')
  }

}
