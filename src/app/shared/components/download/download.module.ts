import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { PictureModule } from '../picture/picture.module';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    PictureModule
  ],
  exports: [DownloadComponent]
})
export class DownloadModule { }
