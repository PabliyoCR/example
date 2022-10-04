import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FORM } from './form.model';

@Component({
  selector: 'section[app-signup]',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    id: 'sign'
  }
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  controls: FORM[];
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      fullname: [null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\s]*$/)]],
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
    this.controls = [
      {
        id: 'fullname',
        type: 'text',
        errorMessage: [],
        maxLength: '255',
        placeholder: 'Full Name'
      },
      {
        id: 'email',
        type: 'email',
        errorMessage: [],
        maxLength: '255',
        placeholder: 'Email'
      }
    ]
  }

  ngOnInit(): void {
  }

  submitForm(e: any) {
    e.preventDefault();
    console.log(this.form)
    if(this.form.valid)
    {

    }
    else {
      this.form.markAllAsTouched();
    }
  }

}
