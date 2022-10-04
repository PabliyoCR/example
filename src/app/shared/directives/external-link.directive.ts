import { Directive, HostListener, Input, Inject } from '@angular/core';
import { ModalLeavingComponent } from '../components/modal-leaving/modal-leaving.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[interstitial]',
})
export class ExternalLinkDirective {
  @Input() href: string = '';
  @Input() target: string = '';
  constructor(
    private modal: NgbModal,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('click', ['$event']) onClick(event: any) {
    event.preventDefault();

    const modalRef = this.modal.open(ModalLeavingComponent, {
      centered: true,
      modalDialogClass: 'leaving mx-auto',
    });
    
    modalRef.componentInstance.href = this.href;
    modalRef.componentInstance.target = this.target;
    // !this.document.querySelector('body')?.classList.add('modal-open');
  }
}
