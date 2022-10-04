import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteMapRoutingModule } from './site-map-routing.module';
import { RouterModule } from '@angular/router';
import { SiteMapComponent } from './site-map.component';
import { ExternalLinkModule } from 'src/app/shared/modules/external-link/external-link.module';


@NgModule({
  declarations: [SiteMapComponent],
  imports: [
    CommonModule,
    RouterModule,
    SiteMapRoutingModule,
    ExternalLinkModule
  ],
  exports: [SiteMapComponent]
})
export class SiteMapModule { }
