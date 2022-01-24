import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, replaceChar?: string): any {
    if(value === undefined){
      return value;
    }

    if(replaceChar){ //+, *, -, /, 1, a HOLA PEDRO123
      return replaceChar.repeat(value.length)
    }

    return '*'.repeat(value.length)    
  }

}
