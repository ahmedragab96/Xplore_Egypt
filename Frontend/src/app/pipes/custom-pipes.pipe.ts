import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter', pure: false})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term, args: string[] ): any {
    
    let len = args.length;
    if (len < 10) {
      for (let i = len; i < 10; i++) {
        args[i] = args[0]
      }
    }

    if (term) {
      term = term.toLowerCase();
      return items.filter(item => (
        item[args[0]].toLowerCase().indexOf(term) !== -1 ||
        item[args[1]].toLowerCase().indexOf(term) !== -1 ||
        item[args[2]].toLowerCase().indexOf(term) !== -1 ||
        item[args[3]].toLowerCase().indexOf(term) !== -1 ||
        item[args[4]].toLowerCase().indexOf(term) !== -1 ||
        item[args[5]].toLowerCase().indexOf(term) !== -1 ||
        item[args[6]].toLowerCase().indexOf(term) !== -1 ||
        item[args[7]].toLowerCase().indexOf(term) !== -1 ||
        item[args[8]].toLowerCase().indexOf(term) !== -1 ||
        item[args[9]].toLowerCase().indexOf(term) !== -1)
      )
      }
    else {
      return items
    }
  }
}