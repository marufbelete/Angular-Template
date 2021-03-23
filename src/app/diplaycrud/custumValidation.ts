import { AbstractControl } from '@angular/forms';
export class CustomVlidation
{
  static mustMatch(control: AbstractControl) {
    if (control.value.indexOf(' ')!=-1) {
      return { validname: true };
    }
    return null;
  }
  static conatin(control: AbstractControl) {
    if (control.value.trim()=="mar") {
      return { cont: true };
    }
    return null;
  }
}
