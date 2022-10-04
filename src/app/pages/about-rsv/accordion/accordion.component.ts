import { Component, OnInit, Inject, ViewEncapsulation, PLATFORM_ID} from '@angular/core';
import { Accordion } from './accrodion.model';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Collapse } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'section[app-accordion]',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  host: {
    id: 'expand-your-knowledge',
  },
})
export class AccordionComponent implements OnInit {
  allOpen: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformid: any) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(){
    for (let i = 1; i <= 3; i++) {
      let collapsible = document.getElementById('collapse--' + i)
      collapsible?.addEventListener('show.bs.collapse', function () {
        console.log("colapsadoooooooo")
        let collapseButton = document.querySelector(".accordion-item.open");
        collapseButton?.classList.remove('open');
        let collapsibleOpen = document.querySelector(".collapse.show");
        if(collapsibleOpen){
          var bsCollapse = new bootstrap.Collapse(collapsibleOpen, {
            toggle: false
          })
          bsCollapse.hide()
        }
      })
    }
  }

  openAll(e: any) {
    const button: HTMLElement = e.target.closest('.accordion__button')!;
    const buttonLabel: HTMLElement = e.target.closest('.button__label');
    const buttonCaret: HTMLElement = e.target.closest('.button__caret');
    const accordionItem: HTMLElement = e.target.closest('.accordion-item');
    const accordionButton: HTMLElement = e.target.closest('.accordion-button')!;
    const parent: HTMLElement = e.target.closest('.accordion__container')!;

    if (!button && !accordionButton) return;
    const accordion: HTMLElement = (parent?.querySelector(
      '.accordion'
    ) as HTMLElement)!;
    const accordionItems: NodeList = accordion.querySelectorAll('.accordion-item');
    const accordionCollapseItems: NodeList = accordion.querySelectorAll(
      '.accordion-collapse'
    )!;
    const accordionButtonItems: NodeList =
      accordion.querySelectorAll('.accordion-button')!;

    if (button || buttonCaret) {
      if (buttonLabel.textContent?.includes('OPEN ALL')) {
        accordionItems.forEach((collapse: any) =>
          collapse.classList.add('open')
        );
        accordionCollapseItems.forEach((collapse: any) =>
          collapse.classList.add('show')
        );
        accordionButtonItems.forEach((button: any) =>
          button.classList.remove('collapsed')
        );
        this.modifyButton('CLOSE ALL', buttonLabel);
        this.allOpen = true;
      } else {
        accordionItems.forEach((collapse: any) =>
          collapse.classList.remove('open')
        );
        accordionCollapseItems.forEach((collapse: any) =>
          collapse.classList.remove('show')
        );
        accordionButtonItems.forEach((collapse: any) =>
          collapse.classList.add('collapsed')
        );
        this.modifyButton('OPEN ALL', buttonLabel);
        this.allOpen = false;
      }
    }

    if (accordionButton) {
      if (accordionItem.classList.contains('open')) {
        accordionItem.classList.remove('open');
      } else {
        accordionItem.classList.add('open');
      }

      const buttonChild: HTMLElement = (parent?.querySelector(
        '.button__label'
      ) as HTMLElement)!;

      setTimeout(() => {
        const accordionLength = accordionCollapseItems.length;
        let accordionOptions = 0;
        for (let x = 0; x < accordionCollapseItems.length; x++) {
          if ((accordionCollapseItems[x] as HTMLElement).classList.contains('show')) {
            accordionOptions = accordionOptions+1;
          }
        }

        if(accordionOptions === accordionLength){
          this.allOpen = true;
          this.modifyButton(
            // 'btn-outline-white',
            // 'btn-white',
            'CLOSE ALL',
            buttonChild
          );
        } else {
          this.allOpen = false;
          this.modifyButton(
            // 'btn-white',
            // 'btn-outline-white',
            'OPEN ALL',
            buttonChild
          );
        }

      }, 400);
    }
  }

  private modifyButton(
    // addClass: string,
    // removeClass: string,
    text: string,
    button: HTMLElement
  ) {
    // button.classList.add(addClass);
    // button.classList.remove(removeClass);
    button.textContent = text;
  }
}
