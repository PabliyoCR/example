import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormModalComponent } from "./form-modal.component";
import { NgxCaptchaModule } from 'ngx-captcha';
import { ExternalLinkModule } from '../../modules/external-link/external-link.module';
@NgModule({
  declarations: [FormModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    ExternalLinkModule
  ],
  exports: [FormModalComponent]
})
export class FormModalModule { }
