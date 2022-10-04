import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranscriptComponent } from './transcript.component';
import { PictureModule } from '../picture/picture.module';



@NgModule({
  declarations: [
    TranscriptComponent
  ],
  imports: [
    CommonModule,
    PictureModule
  ],
  exports: [
    TranscriptComponent
  ],
})
export class TranscriptModule { }
