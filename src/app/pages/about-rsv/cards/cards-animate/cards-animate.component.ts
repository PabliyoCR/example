import { Component, OnInit } from '@angular/core';
import { FlipCard } from './flip-cards.model';

@Component({
  selector: 'div[app-cards-animate]',
  templateUrl: './cards-animate.component.html',
  styleUrls: ['./cards-animate.component.scss'],
  host: {
    class: 'd-flex flex-column flex-md-row align-items-center'
  }
})
export class CardsAnimateComponent implements OnInit {
  data: FlipCard[];
  constructor() { 
  this.data = [
    {
      frontTitle: 'How common is <br/>RSV in ALL infants?',
      imgAltText: 'Infant icon',
      back: {
        textTop: [
          'Approximately'
        ],
        textBig: '70%',
        textBottom: 'of infants have been <br/>infected with RSV, and most <br/>children are infected by their <br/>2nd birthday.<sup>13</sup>'
      }
    },
    {
      frontTitle: 'Which respiratory virus leads to more hospitalizations?',
      imgAltText: 'Nurse icon',
      back: {
        textTop: [
          'Infants under <strong>1 year</strong> are'
        ],
        textBig: '~16x',
        textBottom: 'more likely to be hospitalized due to RSV than influenza.<sup>14†</sup>'
      }
    },
    {
      frontTitle: 'How severe can <br/> RSV symptoms<br/> become?',
      imgAltText: 'Lung icon',
      back: {
        textTop: [
          'Healthy infants with no underlying conditions can end up in the ICU due to RSV, as demonstrated by a US study, which found that'
        ],
        textBig: '1 in 4',
        textBottom: 'otherwise healthy infants were admitted for intensive care.<sup>15‡</sup>'
      }
    },
    {
      frontTitle: 'How does RSV burden the healthcare <br class="d-md-none"/>system?',
      imgAltText: 'Hospital icon',
      back: {
        textTop: [
          'CDC estimates that there are around'
        ],
        textBig: '17x',
        textBottom: 'as many RSV-associated <br/>LRTI cases treated in the ED and office visits compared to hospital admissions in infants <12 months of age.<sup>16,17§</sup>'
      }
    }
  ]
  }

  ngOnInit(): void {
  }

}
