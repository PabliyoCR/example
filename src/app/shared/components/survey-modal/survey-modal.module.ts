import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyModalComponent } from './survey-modal.component';



@NgModule({
  declarations: [
    SurveyModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SurveyModalComponent]
})
export class SurveyModalModule { }
