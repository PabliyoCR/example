import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'div[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    class: 'card text-center'
  }
})
export class CardComponent implements OnInit {
  @Input() data: Card;
  constructor() { 
    this.data = {
      title: '',
      button: {
        text: '',
        url: '',
        fragment: '',
        classes: ''
      }
    }
  }

  ngOnInit(): void {
  }

}
