import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsDiscussComponent } from './experts-discuss.component';

import { PictureModule } from 'src/app/shared/components/picture/picture.module';
import { TranscriptModule } from 'src/app/shared/components/transcript/transcript.module';

@NgModule({
  declarations: [ExpertsDiscussComponent],
  imports: [
    CommonModule,
    PictureModule,
    TranscriptModule
  ],
  exports: [ExpertsDiscussComponent],
})
export class ExpertsDiscussModule { }
