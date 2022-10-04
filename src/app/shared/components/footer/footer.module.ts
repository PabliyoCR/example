import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FooterComponent } from './footer.component';
import { PictureModule } from "../picture/picture.module";
import { ExternalLinkModule } from '../../modules/external-link/external-link.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PictureModule,
    ExternalLinkModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
