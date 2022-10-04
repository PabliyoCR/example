import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-expert-discussions]',
  templateUrl: './expert-discussions.component.html',
  styleUrls: ['./expert-discussions.component.scss'],
  host: {
    id: 'expert-discussions',
    class: 'bg-secondary',
  },
})
export class ExpertDiscussionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
