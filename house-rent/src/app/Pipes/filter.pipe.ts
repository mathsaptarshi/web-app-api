import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propNmae:string): any[] {
    const resultArray = [];
    if(value.length === 0 || filterString === '' || propNmae === ''){
      return value;
    }
    
    for (const item of value){
      if(item[propNmae] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
