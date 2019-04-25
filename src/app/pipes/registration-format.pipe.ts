import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationFormat'
})
export class RegistrationFormatPipe implements PipeTransform {

  transform(value: string): Date {
    var shortTime = value.slice(0, -7);
    var dateFormat = new Date(shortTime);
    return dateFormat
  }

}
