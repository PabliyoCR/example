import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RvsResourcesComponent } from './rvs-resources.component';
import { PictureModule } from 'src/app/shared/components/picture/picture.module';


@NgModule({
  declarations: [RvsResourcesComponent],
  imports: [
    CommonModule,
    PictureModule
  ],
  exports: [RvsResourcesComponent]
})
export class RvsResourcesModule { }
