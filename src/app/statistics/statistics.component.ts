import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ChartService} from '../chart.service';
import * as _ from 'lodash';
import { AthleteService } from '../services/athlete.service';
import { Athlete } from '../entities/athlete';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  athletes: Athlete[] = [];
  athleteId;
  trainingai;
  datatypes;
  x = [1, 2, 3, 4, 5];
  y = [1, 2, 4, 8, 16];
  constructor(private athleteService: AthleteService, private trainingService: TrainingService) { }
  
  public graph = {
    data: [{
      x: this.x,
      y: this.y
    }],
    // layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};

getAthletes(): void {
  this.athleteService.getAthletes()
    .subscribe(athletes => this.athletes.push(...athletes));
}

getAllTrainings(): void {
  this.trainingService.getAllTrainings()
    .subscribe(trainings => {
      this.trainingai = trainings;
      this.datatypes = Object.keys(this.trainingai[0]);
    });
}

  ngOnInit() {
    this.getAthletes();
    this.getAllTrainings();
  }


  myMethod() {
    console.log(this.athleteId);
  }

//   onChange(deviceValue) {
//     console.log(deviceValue);
// }

test() {
  console.log(this.datatypes);
}

updategraph() {
  console.log('graph updating');
  this.x = [5 , 8 , 6];
  this.y = [2, 5 , 7];
}

  onChange(deviceValue) {
    console.log('changes happened');

}
}
