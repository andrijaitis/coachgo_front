import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.scss']
})
export class AddAthleteComponent implements OnInit {
  public athleteForm;

  athletes: Athlete[] = [  ];

  constructor(private athleteService: AthleteService, private router: Router, private fb: FormBuilder) { }
 
  ngOnInit() {

    this.athleteForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      height: ['', Validators.required],
      sport: ['', Validators.required],
      phone: ['', Validators.required],
      active: ['', Validators.required],
      gender: ['', Validators.required],
    });

  }
  cleanForm() {
    this.athleteForm.reset();
  }


  onSubmit(athleteForm) {
    if (athleteForm.valid) {
      const athlete: Athlete = athleteForm.value;
      this.athleteService.addAthlete(athlete).subscribe();
      athleteForm.value = false;
      setTimeout(() => {
        this.router.navigate(['athletelist']);
      }, 2000);
    } else {
    }
  }










}
