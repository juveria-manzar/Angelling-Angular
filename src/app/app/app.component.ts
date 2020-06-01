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

  title = 'Artificial Intelligence';
  details={
    heading:'What is Artificial Intelligence ?',
    desc:"In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans. Leading AI textbooks define the field as the study of 'intelligent agents': any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals. Colloquially, the term 'artificial intelligence' is often used to describe machines (or computers) that mimic 'cognitive' functions that humans associate with the human mind, such as 'learning' and 'problem solving'."
  }

  fields=['Machine Learning','Deep Learning','Neural Networks']

}
