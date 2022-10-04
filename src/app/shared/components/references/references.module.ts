import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from './references.component';

import {HangBlockModule} from "../hang-block/hang-block.module";

@NgModule({
  declarations: [
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    HangBlockModule
  ],
  exports: [ReferencesComponent]
})
export class ReferencesModule { }
