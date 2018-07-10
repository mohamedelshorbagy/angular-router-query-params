import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any, term: any, prop: any): any {
    if (!arr) {
      return [];
    }
    if (!term || term.length === 0) {
      return arr;
    }
    term = term.toLowerCase();
    return arr.filter(item => {
      return item[prop].toString().toLowerCase().includes(term);
    })
  }

}
