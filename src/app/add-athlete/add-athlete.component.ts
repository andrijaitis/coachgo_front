import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.scss']
})
export class AddAthleteComponent implements OnInit {
  athleteModel: any = {};
  athletes: Athlete[] = [  ];
  public show = false;
  constructor(private athleteService: AthleteService, private router: Router) { }
  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
   }
     getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes = athletes);
      this.router.navigate(['/athletelist']);
  }


  onSubmit() {
    if (!this.athleteModel) { return; }
    this.athleteService.addAthlete(this.athleteModel as Athlete)
      .subscribe(athlete => {
        this.getAthletes();
      });
  }

}
