import { Component, OnInit } from '@angular/core';

//app Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
    console.log('component declared succesffully')
  }
  ngOnInit(){
    console.log('component initialized succesffully')
    this.callme();
  }
  public callme():void{
    console.log('calling method on initialization')
  }

}
