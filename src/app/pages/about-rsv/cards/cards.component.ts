import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-cards]',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  host: {
    id: 'severe-rsv'
  }
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
