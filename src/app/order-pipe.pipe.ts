import { Pipe, PipeTransform } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(value: any[], type: boolean): any {

    if(type){
      value.sort(function(a, b){return b.Id-a.Id})
    }

    return value;
  }

}
