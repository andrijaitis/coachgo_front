import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ChartService } from '../chart.service';
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
  objectKeys = Object.keys;
  athletes: Athlete[] = [];
  athleteId;
  trainingai = [{ '_id': '123', 'trainingdate': '1970-01-01T01:00:00.000Z', training: 'basketball' }];
  specificTraining;
  trainingtype;
  dataTodisplay;

  BasketballTypes = {
    'mpg': 'Minutes per game',
    'fg': 'Field goals',
    'threep': 'Three points',
    'ft': 'Free throws',
    'ppg': 'Points per game',
    'rpg': 'Rebounds per game',
    'apg': 'Assists per game',
    'bpg': 'Blocks per game'
  };
  Footballtypes = {
    'mins': 'Football',
    'goals': 'Total goals',
    'assists': 'Total assists',
    'yel': 'Yellow card',
    'red': 'Red cards',
    'spg': 'Shots per training',
    'aerialswon': 'AerialsWon',
    'motm': 'Man of the match',

  };
  FitnessTypes = {
    'squats': 'Squats',
    'pull': 'Pull-ups',
    'push': 'Squats',
    'Push': 'Push-up',

  };

  datatypes: any = { 'Please select the date': 'Please select the date' };
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



  ngOnInit() {
    this.getAthletes();

  }


  test() {
    console.log(this.dataTodisplay);
  }

  updategraph() {
    console.log('graph updating');
    this.x = [5, 8, 6];
    this.y = [2, 5, 7];
  }


  setDatatypes(training) {
    if (training === 'basketball') {
      this.datatypes = this.BasketballTypes;
    } else if (training === 'football') {
      this.datatypes = this.FitnessTypes;
    } else if (training === 'fitness') {
      this.datatypes = this.FitnessTypes;
    } else {
      this.datatypes = { 'unavailable': 'unavailable' };
    }

  }


  onChange(deviceValue) {
    this.trainingai = this.athletes.find(smth => smth._id === this.athleteId).trainings;
  }
  onChange2(deviceValue) {
    this.trainingtype = this.trainingai.find(smth => smth._id === this.specificTraining).training;
    this.setDatatypes(this.trainingtype);
  }
}
