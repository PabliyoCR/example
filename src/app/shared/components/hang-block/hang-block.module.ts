import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangBlockComponent } from './hang-block.component';



@NgModule({
  declarations: [
    HangBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HangBlockComponent]
})
export class HangBlockModule { }
