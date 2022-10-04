import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-rvs-severe]',
  templateUrl: './rvs-severe.component.html',
  styleUrls: ['./rvs-severe.component.scss'],
  host: {
    class: 'bg-tertiary',
    id: 'severe',
  },
})
export class RvsSevereComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
