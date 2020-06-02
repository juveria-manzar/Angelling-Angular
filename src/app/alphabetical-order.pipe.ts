import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
