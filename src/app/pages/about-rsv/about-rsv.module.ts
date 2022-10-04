import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRsvRoutingModule } from './about-rsv-routing.module';
import { AboutRsvComponent } from './about-rsv.component';

import { CardsModule } from '../about-rsv/cards/cards.module';
import { AccordionModule } from './accordion/accordion.module';
import { RvsQuoteModule } from 'src/app/shared/components/rvs-quote/rvs-quote.module';
import { RvsResourcesModule } from './rvs-resources/rvs-resources.module';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { ExternalLinkModule } from 'src/app/shared/modules/external-link/external-link.module';

@NgModule({
  declarations: [AboutRsvComponent, RelatedArticlesComponent],
  imports: [CommonModule, AboutRsvRoutingModule, AccordionModule, CardsModule, RvsQuoteModule, RvsResourcesModule, ExternalLinkModule],
})
export class AboutRsvModule {}
