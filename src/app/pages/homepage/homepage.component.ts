import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/components/rvs-quote/rvs-quote.model';

@Component({
  selector: 'div[app-homepage]',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  quote: Quote = {
    quote: {
      text: `“More than 70% of infants that are hospitalized with RSV are healthy.<sup class="quote-sup">1</sup>
            <span class="text-secondary">They don’t have any risk factors, and some of them will progress to
            the ICU, so we are always behind the 8 ball trying to prevent who is
            going to do worse, and it’s a struggle.”</span>`,
    },
    doctor: {
      text: 'Dr. Asunción Mejías'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
