import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AthleteService } from '../services/athlete.service';
// import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-edit-redults-modal',
  templateUrl: './edit-redults-modal.component.html',
  styleUrls: ['./edit-redults-modal.component.scss']
})
export class EditRedultsModalComponent implements OnInit {

  @Input() training;

  constructor(public activeModal: NgbActiveModal,  private athleteService: AthleteService) {}

  ngOnInit() {
  }

  update() {
    this.athleteService.updateTraining(this.training).subscribe();
    setTimeout(() => {
alert('done');
    }, 2000);
  }
}
