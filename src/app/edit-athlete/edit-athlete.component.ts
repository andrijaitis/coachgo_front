import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { ActivatedRoute, Router } from '@angular/router';
import { AthleteService } from '../services/athlete.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-athlete',
  templateUrl: './edit-athlete.component.html',
  styleUrls: ['./edit-athlete.component.scss']
})
export class EditAthleteComponent implements OnInit {

  // some temp date so wont complait at the moment
  athlete: Athlete =   {
};
  public athleteForm: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private athleteService: AthleteService,
    private fb: FormBuilder,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.athleteForm = this.fb.group({
      email: [this.athlete.email, Validators.required],
      firstName: [this.athlete.firstName, Validators.required],
      lastName: [this.athlete.lastName, Validators.required],
      age: [this.athlete.age, Validators.required],
      height: [this.athlete.height, Validators.required],
      sport: [this.athlete.sport, Validators.required],
      phone: [this.athlete.phone, Validators.required],
      active: [this.athlete.active, Validators.required],
      gender: [this.athlete.gender, Validators.required],
      _id: [this.route.snapshot.paramMap.get('id'), Validators.required],
    });

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

  onSubmit(athleteForm) {
    if (athleteForm.valid) {
      const athleteFrm: Athlete = athleteForm.value;
      this.athleteService.updateAthlete(athleteFrm).subscribe();
      athleteForm.value = false;
      setTimeout(() => {
        this.router.navigate(['athletelist']);
      }, 2000);
    } else {
    }
  }
}

