import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { Injury } from '../entities/injury';

@Component({
  selector: 'app-injuries',
  templateUrl: './injuries.component.html',
  styleUrls: ['./injuries.component.scss']
})


export class InjuriesComponent implements OnInit {
  athletes: Athlete[] = [];
  athleteId;
  injury: Injury = {activity: null, type: null, description: null};
  injuredList = [];

  constructor(private athleteService: AthleteService) { }

  ngOnInit() {
    this.getAthletes();
    this.getInjured();

  }
  getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes.push(...athletes));
  }

  addInjury(): void {
    const injuredAthlete = {athleteId: this.athleteId, injury: this.injury};
    this.athleteService.athleteInjury(injuredAthlete)
      .subscribe(() => this.getInjured());
        }

 getInjured(): void {
  this.athleteService.getInjuredAthletes()
  .subscribe((injured) => this.injuredList.push(...injured.sort(this.compare).reverse())); // also comapres astuff
 }
test() {

}

  compare(a, b) {
    if (a.numberOfIjuries < b.numberOfIjuries) {
      return -1;
    }
    if (a.numberOfIjuries > b.numberOfIjuries) {
      return 1;
    }
    return 0;
  }


}


