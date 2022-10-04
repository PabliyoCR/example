import { Injectable, Optional, RendererFactory2, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT, isPlatformBrowser  } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
renderer: any;

constructor(
    private rendererFactory: RendererFactory2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformid: any
) {

  this.renderer = this.rendererFactory.createRenderer(this.document, {
    id: '-1',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    data: {}
});
}

updateTag (tag: LinkDefinition) {
    this.removeTag(tag);
    this.addTag(tag);
}

updateCanonical(){
  this.updateTag( { rel: 'canonical', href: environment.appUrl +this.router.url } );
}

 /**
 * Rimuove il link esistente con lo stesso atrtributo rel
 */
removeTag(tag: LinkDefinition) {
  try {

      const selector = this._parseSelector(tag);

      const canonical = this.document.querySelector(selector)
      const head = this.document.head;

      if (head === null) {
          throw new Error('<head> not found within DOCUMENT.');
      }
      if (!!canonical) {
          this.renderer.removeChild(head, canonical);
      }
  } catch (e) {
      console.error('Error within linkService : ', e);
  }
}

/**
 * Inietta il link ocme ultimo child del tag <head>
 */
addTag(tag: LinkDefinition) {

    try {

          const link = this.renderer.createElement('link');
          const head = this.document.head;


          if (head === null) {
              throw new Error('<head> not found within DOCUMENT.');
          }


        Object.keys(tag).forEach((prop: string) => {
            return this.renderer.setAttribute(link, prop, tag[prop]);
        });

        // [TODO]: get them to update the existing one (if it exists) ?
        this.renderer.appendChild(head, link);

    } catch (e) {
        console.error('Error within linkService : ', e);
    }
}

private _parseSelector(tag: LinkDefinition): string {
    const attr: string = tag.rel ? 'rel' : 'hreflang';
    return `link[${attr}="${tag[attr]}"]`;
}
}

export declare type LinkDefinition = {
charset?: string;
crossorigin?: string;
href?: string;
hreflang?: string;
media?: string;
rel?: string;
rev?: string;
sizes?: string;
target?: string;
type?: string;
} & {
[prop: string]: string;
};



