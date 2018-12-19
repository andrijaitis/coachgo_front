import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { ActivatedRoute, Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-all-trainings',
  templateUrl: './all-trainings.component.html',
  styleUrls: ['./all-trainings.component.scss']
})
export class AllTrainingsComponent implements OnInit {
  athlete: Athlete = {};
 
  constructor(
    private route: ActivatedRoute,
    private athleteService: AthleteService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.getAthelete();

  }

   getAthelete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.athleteService.getAthlete(id)
      .subscribe(athletefromSrv => this.athlete = athletefromSrv);
  }

test() {
}


showEverything(training) {
  console.log(training);
  training.firstName = this.athlete.firstName;
  this.modalService.showComplete(training);
}

editResults(training) {
  console.log(training);
  training.firstName = this.athlete.firstName;
  this.modalService.editResults(training);
}

}

