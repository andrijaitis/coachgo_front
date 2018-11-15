import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.scss']
})
export class AddAthleteComponent implements OnInit {
  athleteModel: any = {};
  athletes: Athlete[] = [
    {
      id: '2',
      email: 'hans@gmail.com',
      activity: 'Cricket',
      firstName: 'Mantas',
      lastName: 'Lopas',
      age: '32',
      height: '200',
      dateCreated: '20140313T00:00:00',
      sport: 'Basketball',
      phone: '84654',
      active: 'false'
    }
  ];
  somearray = [];
  public show = false;
  constructor(private athleteService: AthleteService, private userService: UserService) { }
  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.getAthletes();
  }

  getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes = athletes);
      // .subscribe((answer) => (this.somearray = answer ));
      console.log('athletai gauti');
  }


  onSubmit() {
    if (!this.athleteModel) { return; }
    this.athleteService.addAthlete(this.athleteModel as Athlete)
      .subscribe(athlete => {
        // this.athletes.push(this.athleteModel);
        this.getAthletes();
      });
  }


  test() {
    console.log('pushing the shiet');

}

}
