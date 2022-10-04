import { Component, OnInit } from '@angular/core';
import { FlipCard } from './flip-cards.model';

@Component({
  selector: 'div[app-cards-animate]',
  templateUrl: './cards-animate.component.html',
  styleUrls: ['./cards-animate.component.scss'],
  host: {
    class: 'd-none d-md-flex'
  }
})
export class CardsAnimateComponent implements OnInit {
  data: FlipCard[];
  constructor() { 
  this.data = [
    {
      frontTitle: 'Does RSV affect <br/>infants born <br/>at term and<br/> healthy?',
      imgAltText: 'Infant icon',
      back: {
        textTop: [
          ''
        ],
        textBig: '~72%',
        textBottom: 'of infants hospitalized for RSV were born at term with no underlying conditions.<sup>1*</sup>'
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
        textBottom: 'more likely to be hospitalized due to RSV than influenza.<sup>3‡</sup>'
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
        textBottom: 'otherwise healthy infants were admitted for intensive care.<sup>4§</sup>'
      }
    },
    {
      frontTitle: 'How does RSV burden the healthcare<br/>system?',
      imgAltText: 'Hospital icon',
      back: {
        textTop: [
          'CDC estimates that there are around'
        ],
        textBig: '17x',
        textBottom: 'as many RSV-associated LRTI cases treated in the ED and office visits compared to hospital admissions in infants <12 months of age.<sup>5,6‖</sup>'
      }
    }
  ]
  }

  ngOnInit(): void {
  }

}
