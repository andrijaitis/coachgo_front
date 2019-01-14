import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2',
  pure: false
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, filterString: string, name: string): any {
    console.log(value.length);
    if (value.length === 0 || filterString === '') {

    return value;
    }

    const resultArray = [];
    for (const item of value) {
      console.log(item[name]);
      if (item[name] === filterString) {
        resultArray.push(item);

      }
    }
    return resultArray;
  }

}

