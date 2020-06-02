import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {

  transform(array: string[], order:string): any {
    let sorted=array.sort()
    console.log(array)
    return sorted;
  }

}
