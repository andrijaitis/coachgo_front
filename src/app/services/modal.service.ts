import { Injectable } from '@angular/core';
import { NgbdModalContent } from '../my-modal/my-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  text = 'no text :(';
  constructor(private modalService: NgbModal) { }

  open(message) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.message = message;
  }
}
