import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/components/rvs-quote/rvs-quote.model';

@Component({
  selector: 'div[app-about-rsv]',
  templateUrl: './about-rsv.component.html',
  styleUrls: ['./about-rsv.component.scss'],
})
export class AboutRsvComponent implements OnInit {
  quote: Quote = {
    quote: {
      text: `“We don&#8217;t know which of those children are going to need escalation <br class="d-none d-md-inline"/>of their care for RSV. So it&#8217;s unpredictable in that manner.”`,
      class: 'font-22-mob'
    },
    doctor: {
      text: 'Dr. Joseph Domachowske',
      class: 'font-16-mob'
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
