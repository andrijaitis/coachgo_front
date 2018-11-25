import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']

})
export class ResultsModalComponent  {

  @Input() training;

  constructor(public activeModal: NgbActiveModal) {}


}
