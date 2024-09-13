import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName): any {
    const sorted = value.slice();
    sorted.sort((a, b) => {
      const compA = a[propName];
      const compB = b[propName];

      if (compA < compB) {
        return -1;
      } else if (compA > compB) {
        return 1;
      } else {
        return 0;
      }
    });

    return sorted;
  }

}
