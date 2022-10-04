import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModalComponent } from "./game-modal.component";
import { PictureModule } from '../picture/picture.module';

@NgModule({
  declarations: [GameModalComponent],
  imports: [
    CommonModule,
    PictureModule
  ],
  exports: [GameModalComponent]
})
export class GameModalModule { }
