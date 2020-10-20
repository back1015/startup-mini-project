import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(todoItem: any[], args?: any): any {
    console.log(todoItem , args);
  }

}
