import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-join]',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  host: {
    id: 'join',
  },
})
export class JoinComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
