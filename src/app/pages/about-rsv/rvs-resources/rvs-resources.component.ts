import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-rvs-resources]',
  templateUrl: './rvs-resources.component.html',
  styleUrls: ['./rvs-resources.component.scss'],
  host: {
    id: 'rsv-resources',
    class: 'bg-tertiary'
  }
})
export class RvsResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
