import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllInfantsComponent } from './all-infants.component';
import { PictureModule } from 'src/app/shared/components/picture/picture.module';
import { RouterModule } from '@angular/router';
import { TranscriptModule } from 'src/app/shared/components/transcript/transcript.module';



@NgModule({
  declarations: [AllInfantsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PictureModule,
    TranscriptModule
  ],
  exports: [AllInfantsComponent],
})
export class AllInfantsModule { }
