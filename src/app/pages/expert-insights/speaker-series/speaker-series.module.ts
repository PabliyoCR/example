import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerSeriesComponent } from './speaker-series.component';

import { PictureModule } from 'src/app/shared/components/picture/picture.module';
import { ExternalLinkModule } from 'src/app/shared/modules/external-link/external-link.module';



@NgModule({
  declarations: [
    SpeakerSeriesComponent
  ],
  imports: [
    CommonModule,
    PictureModule,
    ExternalLinkModule
  ],
  exports: [SpeakerSeriesComponent]
})
export class SpeakerSeriesModule { }
