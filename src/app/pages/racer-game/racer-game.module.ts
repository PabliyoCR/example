import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacerGameRoutingModule } from './racer-game-routing.module';
import { RacerGameComponent } from './racer-game.component';
import { PictureModule } from 'src/app/shared/components/picture/picture.module';
import { RaceAgainstComponent } from './race-against/race-against.component';

@NgModule({
  declarations: [RacerGameComponent, RaceAgainstComponent],
  imports: [
    CommonModule,
    RacerGameRoutingModule,
    PictureModule
  ],
  exports: [RacerGameComponent],
})
export class RacerGameModule { }
