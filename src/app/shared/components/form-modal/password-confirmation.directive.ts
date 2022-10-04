import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


/** An email should match always confirm email */
export const passwordConfirmMatch: any = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordVerify');
  return password?.value === passwordConfirmation?.value ? null : { 'passwordMatch': true };
};

@Directive({
  selector: '[appEmailConfirmation]'
})
export class EmailConfirmationDirective {

  constructor() { }

}
