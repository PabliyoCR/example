import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RvsQuoteComponent } from './rvs-quote.component';



@NgModule({
  declarations: [RvsQuoteComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RvsQuoteComponent],
})
export class RvsQuoteModule { }
