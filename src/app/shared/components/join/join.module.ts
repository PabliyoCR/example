import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import { PictureModule } from '../picture/picture.module';
import { ExternalLinkModule } from '../../modules/external-link/external-link.module';

@NgModule({
  declarations: [JoinComponent],
  imports: [CommonModule, PictureModule, ExternalLinkModule],
  exports: [JoinComponent],
})
export class JoinModule {}
