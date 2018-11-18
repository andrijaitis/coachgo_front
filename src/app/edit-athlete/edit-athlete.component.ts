import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { ActivatedRoute } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-athlete',
  templateUrl: './edit-athlete.component.html',
  styleUrls: ['./edit-athlete.component.scss']
})
export class EditAthleteComponent implements OnInit {

  // some temp date so wont complait at the moment
  athlete: Athlete =   {
    'email' : 'no data',
    '_id' : this.route.snapshot.paramMap.get('id'),
    'creator' : 'no data',
    'firstName' : 'no data',
    'lastName' : 'no data',
    'age' : 'no data',
    'height' : 'no data',
    'dateCreated' : 'no data',
    'sport' : 'no data',
    'phone' : 'no data',
    'active' : 'no data',
    '__v' : 0,
    'gender': 'no data'
};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private athleteService: AthleteService,
  ) { }


  ngOnInit(): void {
    this.getAthelete();
  }

   getAthelete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.athleteService.getAthlete(id)
      .subscribe(athletefromSrv => this.athlete = athletefromSrv);
  }

  save(): void {
    this.athleteService.updateAthlete(this.athlete)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

