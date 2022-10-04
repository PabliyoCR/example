import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HeroComponent } from './hero/hero.component';
import { PictureModule } from '../../shared/components/picture/picture.module';
import { CardsModule } from './cards/cards.module';
import { RvsCauseComponent } from './rvs-cause/rvs-cause.component';
import { HangBlockModule } from '../../shared/components/hang-block/hang-block.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CyanComponent } from './cyan/cyan.component';
import { RaceAgainstComponent } from './race-against/race-against.component';
import { AllInfantsComponent } from './all-infants/all-infants.component';
import { DownloadModule } from 'src/app/shared/components/download/download.module';
import { RvsSevereComponent } from './rvs-severe/rvs-severe.component';
import { RvsCarouselComponent } from './rvs-carousel/rvs-carousel.component';
import { ExpertDiscussionsComponent } from './expert-discussions/expert-discussions.component';
import { RvsQuoteModule } from 'src/app/shared/components/rvs-quote/rvs-quote.module';
import { FindUsComponent } from './find-us/find-us.component';
import { AllInfantsModule } from './all-infants/all-infants.module';
import { ExternalLinkModule } from 'src/app/shared/modules/external-link/external-link.module';
@NgModule({
  declarations: [
    HomepageComponent,
    HeroComponent,
    RvsCauseComponent,
    SignupComponent,
    CyanComponent,
    RaceAgainstComponent,
    RvsSevereComponent,
    RvsCarouselComponent,
    ExpertDiscussionsComponent,
    FindUsComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    AllInfantsModule,
    PictureModule,
    CardsModule,
    HangBlockModule,
    CardModule,
    DownloadModule,
    RvsQuoteModule,
    ReactiveFormsModule,
    ExternalLinkModule
  ],
})
export class HomepageModule {}
