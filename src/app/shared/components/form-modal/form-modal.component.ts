import { Component, OnInit, Inject, AfterViewInit, PLATFORM_ID, HostBinding } from '@angular/core';
import { FORM } from './form.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordConfirmMatch } from './password-confirmation.directive';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Modal } from "bootstrap";
import { FormService } from '../../services/form/form.service';
import { HttpClient } from '@angular/common/http';
import { RECORD } from '../../services/form/record.model';

@Component({
  selector: 'div[app-form-modal]',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  host: {
    id: 'formModal',
    class: 'modal fade',
    tabindex: '-1',
    ariaLabelledby: 'formModalLabel',
    ariaLabel: 'true'
  }
})
export class FormModalComponent implements OnInit, AfterViewInit {

  controls: FORM[] | undefined;
  form: FormGroup | undefined;
  siteKey: string | undefined;
  formSubmitted: boolean;
  verificationLinkSenttAlert: boolean;
  emailVerifiedAlert: boolean;

  specialCharacters: string = "@$!%*?&.,:;<>:=_~^()\+\-";
  passwordRestriction: RegExp = new RegExp(String.raw`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[${this.specialCharacters}])[A-Za-z\d${this.specialCharacters}]{8,}$`)

  constructor(private fb: FormBuilder, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformid: any, private route: ActivatedRoute, private formService: FormService, private http: HttpClient) {
    this.formSubmitted = false;
    this.verificationLinkSenttAlert = false;
    this.emailVerifiedAlert = false;
    this.controls = [
      {
        id: 'firstname',
        type: 'text',
        errorMessage: 'Please enter first name*',
        maxLength: '255',
        placeholder: 'First Name*'
      },
      {
        id: 'lastname',
        type: 'text',
        errorMessage: 'Please enter last name*',
        maxLength: '255',
        placeholder: 'Last Name*'
      },
      {
        id: 'npi',
        type: 'text',
        errorMessage: '',
        maxLength: '10',
        placeholder: 'NPI Number'
      },
      {
        id: 'emailModal',
        type: 'email',
        errorMessage: 'Please enter a valid email address*',
        maxLength: '255',
        placeholder: 'Email*'
      },
      {
        id: 'password',
        type: 'password',
        errorMessage: 'Please enter a password*',
        maxLength: '255',
        placeholder: 'Create Password*'
      },
      {
        id: 'passwordVerify',
        type: 'password',
        errorMessage: 'Please verify password*',
        maxLength: '255',
        placeholder: 'Verify Password*'
      }
    ];
    this.form = this.fb.group({
      firstname: [null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)]],
      lastname: [null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)]],
      npi: [null, Validators.pattern(/^[0-9]*$/)],
      emailModal: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: [null, [Validators.required, Validators.pattern(this.passwordRestriction)]],
      passwordVerify: [null, Validators.required],
      // recaptcha: ['', Validators.required],
      terms: [null, Validators.requiredTrue]
    },
      { validators: passwordConfirmMatch });
  }

  ngOnInit(): void {
    (this.document.querySelector('#formModal') as HTMLElement).addEventListener('hidden.bs.modal', this.resetForm.bind(this));
    this.addClassToModal();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformid)) {
      this.route.fragment.subscribe((fragment: any) => this.handleFragment(fragment));
      this.route.queryParams.subscribe((param: any) => this.handleParams(param));
    }
  }

  private addClassToModal() {
    if (this.verificationLinkSenttAlert || this.emailVerifiedAlert) {
      this.document.querySelector('#formModal .modal-dialog')?.classList.add('thankYou');
    }
  }

  private handleFragment(fragment: any) {
    if (fragment === 'signup') {
      const modalForm: Modal = new Modal((this.document.querySelector('#formModal') as HTMLElement));
      modalForm.show();
    }
  }

  private handleParams(param: any) {
    if (param.hasOwnProperty('confirm')) {
      this.emailVerifiedAlert = true;
      this.addClassToModal();
      const modalForm: Modal = new Modal((this.document.querySelector('#formModal') as HTMLElement));
      modalForm.show();
    }
  }

  private resetForm() {
    this.form?.reset();
    this.formSubmitted = false;
    this.document.querySelector('#formModal .modal-dialog')?.classList.remove('thankYou');
    this.emailVerifiedAlert = false;
    this.verificationLinkSenttAlert = false;
    window.location.hash = '';
    window.history.pushState({}, document.title, window.location.pathname);
  }

  submitForm(e: any) {
    e.preventDefault();

    if (this.form?.valid) {
      const entries = Object.entries(this.form.value);

      const jsonData = {
        firstname: this.form.controls['firstname'].value,
        lastname: this.form.controls['lastname'].value,
        emailModal: this.form.controls['emailModal'].value,
        npi: this.form.controls['npi'].value,
        password: this.form.controls['password'].value,
        passwordVerify: this.form.controls['passwordVerify'].value,
        terms: this.form.controls['terms'].value
      };

      this.formService.sendRecord(jsonData).subscribe((data: any) => {
        if (data.body.result == 'ok') {
          this.formSubmitted = true;
          this.document
            .querySelector('#formModal .modal-dialog')
            ?.classList.add('thankYou');
            this.formSubmitted = true;
          this.form?.reset();
        } else {
          console.error();
        }
      });

    } else {
      this.addPlaceholderError();
      this.form?.markAllAsTouched();
    }
  }

  private addPlaceholderError() {
    this.controls?.forEach((control: any) => {
      // console.log( (document.querySelector(`#${control.id}`) as HTMLInputElement))
      if (control.id !== 'npi')
        (this.document.querySelector(`#${control.id}`) as HTMLInputElement).setAttribute('placeholder', control.errorMessage);
    })
  }

  showThankYouModal() {
    this.formSubmitted = true;
    this.emailVerifiedAlert = false;
    this.verificationLinkSenttAlert = false;
  }


  handleSuccess(e: any) {
  }
}
