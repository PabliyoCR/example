import { Injectable, Inject } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private dom: any, private router: Router) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }

  // setCanonicalURL() {
  //   // console.log(this.router.url)
  //   const head = this.dom.getElementsByTagName('head')[0];
  //   var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
  //   if (element == null) {
  //     element = this.dom.createElement('link') as HTMLLinkElement;
  //     element.setAttribute('rel', 'canonical')
  //     head.appendChild(element);
  //   }
  //   element.setAttribute('href', `${window.location.href}${this.router.url !== '/' ? this.router.url : ''}`)
  // }
}