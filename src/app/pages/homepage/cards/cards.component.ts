import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-cards]',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  host: {
    class: 'bg-secondary'
  }
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
