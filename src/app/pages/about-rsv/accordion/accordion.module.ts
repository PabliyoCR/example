import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';

import { PictureModule } from 'src/app/shared/components/picture/picture.module';



@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    PictureModule
  ],
  exports: [AccordionComponent]
})
export class AccordionModule { }
