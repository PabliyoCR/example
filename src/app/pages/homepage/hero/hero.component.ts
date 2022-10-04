import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-hero]',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  host: {
    class: 'hero',
    id: 'hero'
  }
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
