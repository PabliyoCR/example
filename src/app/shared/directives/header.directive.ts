import { Directive, Inject, PLATFORM_ID, AfterViewInit, HostListener } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';
@Directive({
  selector: "[appHeader]"
})
export class HeaderDirective implements AfterViewInit {
  sections: NodeList | undefined;
  offsetSectionTop: number[];
  sectionIdentifier: string[] = [
    "hero",
    "rvs-cause",
    "severe",
    "sign",
    "race",
    "all",
    "resource",
    "references"
  ];
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformid: any, private location: Location) {
    this.offsetSectionTop = [];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sections = this.document.querySelectorAll('section')!;
      this.calcSectionTop();
      // console.log(this.offsetSectionTop)
    }, 1000);

  }

  @HostListener('window:resize', ['$event']) onResize() {
    // event.stopImmediatePropagation()
    setTimeout(() => {
      this.calcSectionTop();
    }, 1000);
  }

  private calcSectionTop() {
    this.offsetSectionTop = [];
    const header: HTMLElement = (this.document.querySelector(`header`) as HTMLElement)!;
    this.sections?.forEach((section: any) => {
      this.offsetSectionTop.push(section.offsetTop - header.offsetHeight)
    });
  }

  private changeState(stateURL: string): void {
    this.location.replaceState(stateURL);
  }

  private removeSelected() {
    const allLinks: NodeList = this.document.querySelectorAll('.nav-link')!;
    allLinks.forEach((link: any) => link.classList.remove('nav-link--selected'));
  }

  @HostListener('document:scroll', ['$event']) onScroll(): void {
    // console.log(this.offsetSectionTop)
    // this.calcSectionTop();
    for (let x = 0; x < this.offsetSectionTop.length; x++) {
      //First position
      if (x === 0) {
        if (window.scrollY < this.offsetSectionTop[x + 1]) {
          this.changeState("");
          this.removeSelected();
        }
      }
      //In the middle
      else if (x != this.offsetSectionTop.length - 1) {
        if (window.scrollY < this.offsetSectionTop[x + 1] && window.scrollY >= this.offsetSectionTop[x]) {
          this.removeSelected();
          if (this.sectionIdentifier[x] === 'rvs-cause'
            || this.sectionIdentifier[x] === 'sign'
            || this.sectionIdentifier[x] === 'race'
            || this.sectionIdentifier[x] === 'resource') {
            this.changeState(`#${this.sectionIdentifier[x]}`);
            this.document.querySelector(`.nav-link-${this.sectionIdentifier[x]}`)?.classList.add('nav-link--selected')
          }
          else {
            this.changeState("")
          }

        }
      }
      //Last value 
      else {
        if (window.scrollY >= this.offsetSectionTop[x]) {
          this.removeSelected();
          this.changeState("");
        }
      }
    }
  }




}