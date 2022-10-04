import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertInsightsRoutingModule } from './expert-insights-routing.module';
import { ExpertInsightsComponent } from './expert-insights.component';

import { SpeakerSeriesModule } from './speaker-series/speaker-series.module';
import { ExpertsDiscussModule } from './experts-discuss/experts-discuss.module';
import { RsvPodcastModule } from './rsv-podcast/rsv-podcast.module';
import { JoinModule } from 'src/app/shared/components/join/join.module';

@NgModule({
  declarations: [
    ExpertInsightsComponent,    
  ],
  imports: [
    CommonModule,
    ExpertInsightsRoutingModule,
    SpeakerSeriesModule,
    ExpertsDiscussModule,
    RsvPodcastModule
  ]
})
export class ExpertInsightsModule { }
