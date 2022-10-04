import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Quote } from './rvs-quote.model';

@Component({
  selector: 'section[app-rvs-quote]',
  templateUrl: './rvs-quote.component.html',
  styleUrls: ['./rvs-quote.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    id: 'rvs-quote',
  },
})
export class RvsQuoteComponent implements OnInit {
  @Input() quote: Quote = {
    quote: {
      text: '',
      class: ''
    },
    doctor: {
      text: '',
      class: ''
    },
  };

  constructor() {}

  ngOnInit(): void {
  }
}
