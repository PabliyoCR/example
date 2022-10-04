import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Accordion } from './accrodion.model';

@Component({
  selector: 'div[app-accordion]',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'd-md-none'
  }
})
export class AccordionComponent implements OnInit {
  data: Accordion[];
  constructor() { 
    this.data = [
      {
        title: 'Does RSV affect infants born at term and healthy?',
        text: [
          '<strong class="highlight">~72%</strong> of infants hospitalized for RSV were born at term with no underlying conditions.<sup>1*</sup>'
        ]
      },
      {
        title: 'Which respiratory virus leads <br/> to more hospitalizations?',
        text: [
          'Infants under <strong>1 year</strong> are <strong class="highlight">~16x</strong> more likely to be hospitalized due to RSV than influenza.<sup>3‡</sup>'
        ]
      },
      {
        title: 'How severe can RSV symptoms become?',
        text: [
          'Healthy infants with no underlying conditions can end up in the ICU due to RSV, as demonstrated by a US study, which found that <strong class="highlight">1 in 4</strong> otherwise healthy infants were admitted for intensive care.<sup>4§</sup>'
        ]
      },
      {
        title: 'How does RSV burden the healthcare system?',
        text: [
          'CDC estimates that there are around </br> <strong class="highlight">17x</strong> as many RSV-associated LRTI cases treated in the ED and office visits compared to hospital admissions in infants <12 months of age.<sup>5,6‖</sup>'
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

  openAll(e: any) {
    const button: HTMLElement = e.target.closest('.accordion__button')!;
    const accordionButton: HTMLElement = e.target.closest('.accordion-button')!;
    const parent: HTMLElement = e.target.closest('.accordion__container')!

    // console.log(e.target)

    if(!button && !accordionButton) return;
    const accordion: HTMLElement = (parent?.querySelector('.accordion') as HTMLElement)!;
    const accordionCollapseItems: NodeList = accordion.querySelectorAll('.accordion-collapse')!;
    const accordionButtonItems: NodeList = accordion.querySelectorAll('.accordion-button')!;
    // console.log(accordionCollapseItems);

    if(button) {
      if(button.textContent?.includes('OPEN ALL')) {
        accordionCollapseItems.forEach((collapse: any) => collapse.classList.add('show'))
        accordionButtonItems.forEach((button: any)=> button.classList.remove('collapsed'))
        this.modifyButton('btn-outline-white', 'btn-white', 'CLOSE ALL', button);
      } else {
        accordionCollapseItems.forEach((collapse: any) => collapse.classList.remove('show'));
        this.modifyButton('btn-white', 'btn-outline-white', 'OPEN ALL', button);
        accordionButtonItems.forEach((collapse: any)=> collapse.classList.add('collapsed'))
      }
    }

    if(accordionButton) {
      let allOpen: boolean = false;
      const buttonChild: HTMLElement =(parent?.querySelector('.accordion__button') as HTMLElement)!;
      

     setTimeout(() => {
      for(let x = 0; x < accordionCollapseItems.length; x++) {
        // console.log(accordionCollapseItems[x])
        if((accordionCollapseItems[x] as HTMLElement).classList.contains('show')) {
          allOpen = true;
          break;
        } else {
          allOpen = false;
        }
      }

      if(allOpen) {
        this.modifyButton('btn-outline-white', 'btn-white', 'CLOSE ALL', buttonChild);
      } else {
        this.modifyButton('btn-white', 'btn-outline-white', 'OPEN ALL', buttonChild);
      }
     }, 400);
    }
  }

  private modifyButton(addClass: string, removeClass: string, text: string, button: HTMLElement) {
    button.classList.add(addClass);
    button.classList.remove(removeClass);
    button.textContent = text; 
  }

}
