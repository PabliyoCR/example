import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section[app-rsv-podcast]',
  templateUrl: './rsv-podcast.component.html',
  styleUrls: ['./rsv-podcast.component.scss'],
  host: {
    id: 'rsv-podcast',
    class: 'bg-tertiary'
  }
})
export class RsvPodcastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
