import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cambiaLetras'
})
export class CambiaLetrasPipe implements PipeTransform {
  transform(value: string): string {
    return value.replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0");
  }
}