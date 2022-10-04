import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, Inject, PLATFORM_ID, HostBinding } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'div[app-modal-leaving]',
  templateUrl: './modal-leaving.component.html',
  styleUrls: ['./modal-leaving.component.scss'],
})
export class ModalLeavingComponent implements OnInit {
  @Input() href: string = '';
  @Input() target: string = '';

  constructor(
    public modal: NgbActiveModal,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformid: any
  ) {}

  ngOnInit(): void {}

  continue(): void {
    if (isPlatformBrowser(this.platformid)) {
      window.open(this.href, this.target);
      this.close();
    }
  }

  close(): void {
    this.modal.close();
  }

  ngOnDestroy(): void {
    // (this.document.querySelector('body') as HTMLElement)?.classList.remove('modal-open');
  }
}
