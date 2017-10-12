import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

@Injectable()


export class SearchPipe implements PipeTransform {

	transform(value: any, args?: any): any {

		if (!args) return value;
		
		return value.filter(it => it.firstName.startsWith(args));
    
  }

}
