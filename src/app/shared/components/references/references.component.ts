import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'section[app-references]',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  host: {
    id: 'references',
  },
})
export class ReferencesComponent implements OnInit {
  constructor(public url: LocationStrategy) {}

  ngOnInit(): void {}

  checkUrl(path: string) {
    return this.url.path() === path;
  }
}
