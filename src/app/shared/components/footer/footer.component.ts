import { Component, OnInit } from '@angular/core';
import { Links } from '../../models/links.model';

@Component({
  selector: 'footer[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    class: 'bg-primary',
  },
})
export class FooterComponent implements OnInit {
  data: Links[];
  constructor() {
    this.data = [
      {
        text: '<strong>COOKIE POLICY</strong>',
        url: 'https://www.sanofi.com/en/data-privacy',
        classes: '',
      },
      {
        text: '<strong>SITE MAP</strong>',
        url: '/site-map',
        fragment: '',
        classes: '',
      },
      {
        text: '<strong>PRIVACY</strong>',
        url: 'https://www.sanofi.com/en/our-responsibility/sanofi-global-privacy-policy',
        fragment: '',
        classes: '',
      },
      {
        text: '<strong>CONTACT US</strong>',
        url: 'https://www.sanofi.us/en/contact-us',
        fragment: '',
        classes: '',
      },
      {
        text: '<strong>TERMS & CONDITIONS</strong>',
        url: 'https://www.sanofi.us/en/legal-notice#TermsandConditions',
        fragment: '',
        classes: '',
      },
      {
        text: '<strong>ABOUT SANOFI</strong>',
        url: 'https://www.sanofi.us/en/about-us',
        fragment: '',
        classes: '',
      },
    ];
  }

  ngOnInit(): void {}
}
