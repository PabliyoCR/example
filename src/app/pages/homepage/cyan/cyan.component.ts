import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-cyan]',
  templateUrl: './cyan.component.html',
  styleUrls: ['./cyan.component.scss'],
  host: {
    class: 'bg-tertiary',
    id: 'cyan',
  },
})
export class CyanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
