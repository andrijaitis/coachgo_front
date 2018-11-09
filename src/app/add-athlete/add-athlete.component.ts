import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../athlete.service';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.scss']
})
export class AddAthleteComponent implements OnInit {
  athleteModel: any = {};
  athletes: Athlete[] = [
    {
      id: '1',
      email: 'bybis@dd.t',
      activity: 'Football',
      firstName: 'Hansas',
      lastName: 'Andersenas',
      age: '24',
      height: '181',
      dateCreated: '20140313T00:00:00',
      sport: 'football',
      phone: '123456',
      active: 'true'
    },
    {
      id: '2',
      email: 'hans@gmail.com',
      activity: 'Basketball',
      firstName: 'Endeman',
      lastName: 'Skrautenwagen',
      age: '32',
      height: '200',
      dateCreated: '20140313T00:00:00',
      sport: 'Basketball',
      phone: '84654',
      active: 'false'
    }
  ];
  public show = false;
  constructor(private athleteService: AthleteService) { }
  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.getAthletes();
  }

  getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes = athletes);
  }

  onSubmit() {
    if (!this.athleteModel) { return; }
    this.athleteService.addAthlete(this.athleteModel as Athlete)
      .subscribe(athlete => {
        this.athletes.push(athlete);
      });
  }

  test() {
    console.log('testing this button');
    console.log(this.athleteModel);
  }
}
