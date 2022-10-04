import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'div[app-transcript]',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
  host: {
    class: 'position-relative'
  }
})
export class TranscriptComponent implements OnInit {
  @Input() transcriptText!: string;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
