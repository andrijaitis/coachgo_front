import { Injectable } from '@angular/core';
import { NgbdModalContent } from '../my-modal/my-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsModalComponent } from '../results-modal/results-modal.component';
import { EditRedultsModalComponent } from '../edit-redults-modal/edit-redults-modal.component';

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

  showComplete(training) {
    const modalRef = this.modalService.open(ResultsModalComponent);
    modalRef.componentInstance.training = training;
  }
  editResults(training) {
    const modalRef = this.modalService.open(EditRedultsModalComponent);
    modalRef.componentInstance.training = training;
  }

}
