import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-find-us]',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss'],
  host: {
    id: 'find-us',
    class: 'bg-secondary',
  },
})
export class FindUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
