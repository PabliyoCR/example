import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./cards.component";
import { AccordionComponent } from './accordion/accordion.component';
import { CardsAnimateComponent } from './cards-animate/cards-animate.component';
import { HangBlockModule} from "../../../shared/components/hang-block/hang-block.module";
import { PictureModule} from "../../../shared/components/picture/picture.module";
@NgModule({
  declarations: [CardsComponent, AccordionComponent, CardsAnimateComponent],
  imports: [
    CommonModule,
    HangBlockModule,
    PictureModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
