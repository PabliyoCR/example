import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-related-articles]',
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss'],
  host: {
    id: 'related-articles',
    class: 'bg-secondary'
  }
})
export class RelatedArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
