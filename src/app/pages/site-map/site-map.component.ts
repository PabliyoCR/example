import { Component, OnInit } from '@angular/core';
import { SiteMap } from './site-map.model';
@Component({
  selector: 'div[app-site-map]',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent implements OnInit {

  routes: SiteMap[] = [
    {
      text: 'Home',
      href: false,
      url: '/',
    },
    {
      text: 'About RSV',
      href: false,
      url: '/about-rsv',
      fragments: [
        {
          text: 'Expand Your Knowledge',
          url: '/about-rsv',
          fragment: 'expand-your-knowledge',
        },
        {
          text: 'Rethinking RSV',
          url: '/about-rsv',
          fragment: 'severe-rsv',
        },
        {
          text: 'RSV Resources',
          url: '/about-rsv',
          fragment: 'rsv-resources',
        },
        {
          text: 'Related Articles',
          url: '/about-rsv',
          fragment: 'related-articles',
        },
      ]
    },
    {
      text: 'Expert Insights',
      href: false,
      url: '/expert-insights',
      fragments: [
        {
          text: 'RSV Speaker Series',
          url: '/expert-insights',
          fragment: 'speaker-series',
        },
        {
          text: 'Experts Discuss RSV',
          url: '/expert-insights',
          fragment: 'experts-discuss',
        },
        {
          text: 'RSVoice Podcast',
          url: '/expert-insights',
          fragment: 'rsv-podcast',
        }
      ]
    },
    {
      text: 'RSV Racer Game',
      href: false,
      url: '/racer-game',
    },
  ];

  footer: SiteMap[] = [
    {
      text: 'Cookie Policy',
      href: true,
      url: 'https://www.sanofi.com/en/data-privacy',
    },
    {
      text: 'Site Map',
      href: false,
      url: '/site-map',
    },
    {
      text: 'Privacy',
      href: true,
      url: 'https://www.sanofi.com/en/our-responsibility/sanofi-global-privacy-policy',
    },
    {
      text: 'Contact Us',
      href: true,
      url: 'https://www.sanofi.us/en/contact-us',
    },
    {
      text: 'Terms & Conditions',
      href: true,
      url: 'https://www.sanofi.us/en/legal-notice#TermsandConditions',
    },
    {
      text: 'About Sanofi',
      href: true,
      url: 'https://www.sanofi.us/en/about-us',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
