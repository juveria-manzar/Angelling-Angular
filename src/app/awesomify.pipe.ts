import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesomify'
})
export class AwesomifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    return value + " is Awesome";
  }

}
