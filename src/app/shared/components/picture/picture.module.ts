import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureComponent } from "./picture.component";

@NgModule({
  declarations: [PictureComponent],
  imports: [
    CommonModule
  ],
  exports: [PictureComponent]
})
export class PictureModule { }
