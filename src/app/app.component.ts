import { Component, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { LocationStrategy,  DOCUMENT } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators'
import { Modal } from 'bootstrap';
import { LinkService } from './shared/services/link.service';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rethinkrsv-com';

  constructor(@Inject(DOCUMENT) private document: Document, public url: LocationStrategy, public router: Router, private linkService : LinkService, private seoService : SeoService, private activatedRoute : ActivatedRoute) {}

  ngOnInit() : void{
    // Metatags SEO
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      ).subscribe(data => {
        this.linkService.updateCanonical();
        let seoData = data['seo'];
        if (seoData) {
          this.seoService.updateTitle(seoData['title']);
          this.seoService.updateMetaTags(seoData['metaTags']);
        }
      });

      //Survey Modal
      const surveyForm: Modal = new Modal((this.document.querySelector('#surveyModal') as HTMLElement));
      surveyForm.show();

      window.addEventListener("beforeunload", function ($event) {
        surveyForm.show();
        return $event.returnValue = "You have attempted to leave this page. Are you sure?";
      })

  }

  checkUrl(path: string) {
    return this.url.path() === path;
  }

  checkNotUrl(path: string) {
    return this.url.path() !== path;
  }

 /*  @HostListener('window:beforeunload', ['$event'])
  async onBeforeUnload(e : Event) {
    e.preventDefault()
    const surveyForm: Modal = new Modal((this.document.querySelector('#surveyModal') as HTMLElement));
      surveyForm.show();
  } */
}
