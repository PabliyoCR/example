import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsvPodcastComponent } from './rsv-podcast.component';

import { PictureModule } from 'src/app/shared/components/picture/picture.module';
import { ExternalLinkModule } from 'src/app/shared/modules/external-link/external-link.module';

@NgModule({
  declarations: [RsvPodcastComponent],
  imports: [
    CommonModule,
    PictureModule,
    ExternalLinkModule
  ],
  exports: [RsvPodcastComponent]
})
export class RsvPodcastModule { }
