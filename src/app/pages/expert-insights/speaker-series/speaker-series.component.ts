import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-speaker-series]',
  templateUrl: './speaker-series.component.html',
  styleUrls: ['./speaker-series.component.scss'],
  host: {
    id: 'speaker-series',
    class: 'bg-secondary'
  }
})
export class SpeakerSeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
