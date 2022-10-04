import { Component, OnInit, Inject, AfterViewInit, PLATFORM_ID, HostBinding } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Modal } from "bootstrap";

@Component({
  selector: 'div[app-game-modal]',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss'],
  host: {
    id: 'gameModal',
    class: 'modal fade',
    tabindex: '-1',
    ariaLabelledby: 'gameModalLabel',
    ariaLabel: 'true',
  }
})
export class GameModalComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformid: any, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  resetIFrame(): void {
    let iframe = (this.document.getElementById('gameModalFrame') as HTMLIFrameElement);
    iframe.src += '';
  }
}
