import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-assign-training',
  templateUrl: './assign-training.component.html',
  styleUrls: ['./assign-training.component.scss']
})
export class AssignTrainingComponent implements OnInit {

athletes: Athlete[] = [];
  training = 'basketball';
  step = 0;
  athleteId;
  trainingdate;

 public basketballForm: any;
  myGroup: FormGroup;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private athleteService: AthleteService, private fb: FormBuilder) { }

  ngOnInit() {

    // this.basketballForm = this.fb.group({
    //   id: [this.athleteId, Validators.required],
    //   mpg: ['', Validators.required],
    //   fg: ['', Validators.required],
    //   threep: ['', Validators.required],
    //   ft: ['', Validators.required],
    //   ppg: ['', Validators.required],
    //   rpg: ['', Validators.required],
    //   apg: ['', Validators.required],
    //   bpg: ['', Validators.required],
    //   trainingdate: ['', Validators.required],
    // });
    this.basketballForm = new FormGroup({
      id: new FormControl(this.athleteId),
      mpg: new FormControl(),
      fg: new FormControl(),
      threep: new FormControl(),
      ft: new FormControl(),
      ppg: new FormControl(),
      rpg: new FormControl(),
      apg: new FormControl(),
      bpg: new FormControl(),
      trainingdate: new FormControl(this.trainingdate),
    });

  
    this.getAthletes();
  }

  getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes.push(...athletes));
  }

  test() {
console.log(this.athleteId);
  }
}
