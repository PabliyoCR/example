import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Links } from '../../models/links.model';
import { HeaderLinks } from '../../models/headerLinks.model';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'bg-primary position-fixed start-0 top-0 w-100',
  },
})
export class HeaderComponent implements OnInit {
  data: HeaderLinks[];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformid: any,
    public url: LocationStrategy,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.data = [
      {
        text: 'HOME',
        url: '/',
        fragment: '',
        classes: '',
        dropdown: false,
      },
      {
        text: 'ABOUT RSV',
        url: '/about-rsv',
        classes: '',
        dropdown: true,
        dropdownItems: [
          {
            text: 'EXPAND YOUR KNOWLEDGE',
            url: '/about-rsv',
            fragment: 'expand-your-knowledge',
            classes: '',
          },
          {
            text: 'RETHINKING RSV',
            url: '/about-rsv',
            fragment: 'severe-rsv',
            classes: '',
          },
          {
            text: 'RSV RESOURCES',
            url: '/about-rsv',
            fragment: 'rsv-resources',
            classes: '',
          },
          {
            text: 'RELATED ARTICLES',
            url: '/about-rsv',
            fragment: 'related-articles',
            classes: '',
          },
        ],
      },
      {
        text: 'EXPERT INSIGHTS',
        url: '/expert-insights',
        classes: '',
        dropdown: true,
        dropdownItems: [
          {
            text: 'RSV SPEAKER SERIES',
            url: '/expert-insights',
            fragment: 'speaker-series',
            classes: '',
          },
          {
            text: 'EXPERTS DISCUSS RSV',
            url: '/expert-insights',
            fragment: 'experts-discuss',
            classes: '',
          },
          {
            text: 'RSVoice PODCAST',
            url: '/expert-insights',
            fragment: 'rsv-podcast',
            classes: '',
          }
        ],
      },
      {
        text: 'RSV RACER GAME',
        url: '/racer-game',
        classes: '',
        dropdown: false,
      },
    ];
    gsap.registerPlugin(ScrollToPlugin);
  }

  ngOnInit(): void {
    const duration = this.detectBrowserName() === 'firefox' ? 0.7 : 0.3;

    if (isPlatformBrowser(this.platformid)) {
      this.route.fragment.subscribe((fragment: any) => {
        setTimeout(() => {
          if (fragment) {
            // console.log(fragment)
            const targetElement: HTMLElement = (this.document.querySelector(
              `#${fragment}`
            ) as HTMLElement)!;
            const header: HTMLElement = (this.document.querySelector(
              `header`
            ) as HTMLElement)!;
            // console.log(targetElement)
            if (targetElement)
              gsap.to(window, {
                duration: duration,
                scrollTo:
                  targetElement.offsetTop -
                  header.offsetHeight +
                  (fragment === 'rvs-cause' ? 10 : 1),
                ease: 'none',
              });
          }
        }, 100);
      });
    }
  }

  ngAfterViewInit(){
    if (window.innerWidth > 767) {
      let navDrops = document.querySelectorAll('.nav-item.dropdown')
      navDrops.forEach(navDrop => {
        navDrop.addEventListener('mouseenter', () => {
          (navDrop.querySelector('p') as HTMLElement).click()
        })
      })
    }
  }

  toggleDropdown(e: any) {
    const navBar: HTMLElement = e.target.closest('.navbar')!;
    const navItem: HTMLElement = e.target.closest('.nav-item');
    const navItemCaret: HTMLElement = (navItem?.querySelector('.nav-link__caret') as HTMLElement);
    const navItemCarets = Array.from(navBar?.getElementsByClassName('nav-link__caret'));

    if (!navItem) return;

    //delete rotated class for carets
    navItemCarets.forEach((caret) => {
      if ((caret as HTMLElement) !== navItemCaret) {
        caret.classList.remove('rotated');
      }
    });

    (navItemCaret.classList.contains('rotated')) ? navItemCaret.classList.remove('rotated') : navItemCaret.classList.add('rotated');
  }

  openHideMenu(e: any) {
    const clickedToggler: HTMLElement = e.target.closest('.navbar-toggler');
    const parent: HTMLElement = e.target.closest('.navbar')!;
    const navLink: HTMLElement = e.target.closest('.nav-link')!;
    const navLinkCarets = Array.from(parent?.getElementsByClassName('nav-link__caret'));
    const dropdownItem: HTMLElement = e.target.closest('.dropdown-item');
    const navbarBrand: HTMLElement = (parent?.querySelector(
      '.navbar-brand'
    ) as HTMLElement)!;
    const navbarCollapse: HTMLElement = (parent?.querySelector(
      '.navbar-collapse'
    ) as HTMLElement)!;
    const navbarToggler: HTMLElement = (parent?.querySelector(
      '.navbar-toggler'
    ) as HTMLElement)!;
    const navbarMenuLabel: HTMLElement = (parent?.querySelector(
      '#label'
    ) as HTMLElement)!;

    if (!this.isMobile) return

    if (!clickedToggler && !navLink && !navbarBrand) return;

    // console.log(navbarToggler)

    if (this.isMobile()) {
      if (navLink) {
        if (navLink.classList.contains('dropdown-toggle') && !dropdownItem) {
          this.toggleDropdown(e);
          return;
        }
      }

      if (navbarToggler.classList.contains('collapsed')) {
        setTimeout(() => {
          parent.classList.remove('collapsed');
        }, 30);
        navbarToggler.classList.remove('collapsed');
        navbarCollapse.classList.remove('show');

        //delete rotated class for carets
        navLinkCarets.forEach((caret) => {caret.classList.remove('rotated')});

        navbarMenuLabel.innerHTML = 'MENU';
        this.enableScroll();

      } else {
        if (clickedToggler) {
          parent.classList.add('collapsed');
          navbarToggler.classList.add('collapsed');
          navbarMenuLabel.innerHTML = 'CLOSE';
          this.disableScroll();
        }
      }
    }
  }

  preventClicked(e: any, id: string) {
    e.preventDefault();
    if (isPlatformBrowser(this.platformid)) {
      const targetElement: HTMLElement = (this.document.querySelector(
        `#${id}`
      ) as HTMLElement)!;
      const header: HTMLElement = (this.document.querySelector(
        `header`
      ) as HTMLElement)!;

      if (targetElement)
        gsap.to(window, {
          duration: 0.3,
          scrollTo:
            targetElement.offsetTop -
            header.offsetHeight + 1,
          ease: 'none',
        });
    }
  }

  goPage(url : string, e : Event){
    if(e.isTrusted){
      this.router.navigate([url])
    }
  }

  private isMobile(): boolean {
    return this.document.body.offsetWidth < 768;
  }

  private disableScroll() {
    document.querySelector("body")?.classList.add('disable-scroll');
  }

  private enableScroll() {
    document.querySelector("body")?.classList.remove('disable-scroll');
  }

  private detectBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      default:
        return 'other';
    }
  }

}
