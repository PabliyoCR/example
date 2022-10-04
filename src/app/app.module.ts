import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { ReferencesModule } from './shared/components/references/references.module';
import { HeaderDirective } from './shared/directives/header.directive';
import { FormModalModule } from './shared/components/form-modal/form-modal.module';
import { SurveyModalModule } from './shared/components/survey-modal/survey-modal.module';
import { GameModalModule } from './shared/components/game-modal/game-modal.module';
import { ExternalLinkModule } from './shared/modules/external-link/external-link.module';
import { HttpClientModule } from '@angular/common/http';

//Hammer
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { JoinModule } from './shared/components/join/join.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [AppComponent, HeaderDirective],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    JoinModule,
    ReferencesModule,
    FormModalModule,
    SurveyModalModule,
    GameModalModule,
    HammerModule,
    ExternalLinkModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  /*   {
      provide : LocationStrategy ,
      useClass: HashLocationStrategy
    } */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
