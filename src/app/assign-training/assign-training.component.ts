import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { TrainingService } from '../services/training.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-assign-training',
  templateUrl: './assign-training.component.html',
  styleUrls: ['./assign-training.component.scss']
})
export class AssignTrainingComponent implements OnInit {

athletes: Athlete[] = [];
  training = 'trainingFORM';
  step = 0;
  athleteId;
  trainingdate;
  done = false;
  equipment = 'basketball';
  notes = '';
 
 public basketballForm: any;
  myGroup: FormGroup;
  footballForm: FormGroup;
  fitnessForm: FormGroup;
  swimmingForm: FormGroup;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private athleteService: AthleteService, private trainingService: TrainingService,
     private fb: FormBuilder , private modalService: ModalService) { }

  ngOnInit() {
    
    this.basketballForm = this.fb.group({
      id: [this.athleteId, Validators.required],
      mpg: ['', Validators.required],
      fg: ['', Validators.required],
      threep: ['', Validators.required],
      ft: ['', Validators.required],
      ppg: ['', Validators.required],
      rpg: ['', Validators.required],
      apg: ['', Validators.required],
      bpg: ['', Validators.required],
      trainingdate: ['', Validators.required],
    });
    this.footballForm = this.fb.group({
      id: [this.athleteId, Validators.required],
      mins: ['', Validators.required],
      goals: ['', Validators.required],
      assists: ['', Validators.required],
      yel: ['', Validators.required],
      red: ['', Validators.required],
      spg: ['', Validators.required],
      aerialswon: ['', Validators.required],
      motm: ['', Validators.required],
      trainingdate: ['', Validators.required],

      equipment: [this.equipment, Validators.required],
      done: [this.done, Validators.required],
      notes: [this.equipment, Validators.maxLength(25)],
    });
    this.fitnessForm = this.fb.group({
      id: [this.athleteId, Validators.required],
      squats: ['', Validators.required],
      pull: ['', Validators.required],
      push: ['', Validators.required],
      kmr: ['', Validators.required],
      trainingdate: ['', Validators.required],

      equipment: [this.equipment, Validators.required],
      done: [this.done, Validators.required],
      notes: [this.equipment, Validators.maxLength(25)],
    });
    this.swimmingForm = this.fb.group({
      id: [this.athleteId, Validators.required],
      technique: ['', Validators.required],
      time: ['', Validators.required],
      rounds: ['', Validators.required],
      trainingdate: ['', Validators.required],

      equipment: [this.equipment, Validators.required],
      done: [this.done, Validators.required],
      notes: [this.equipment, Validators.maxLength(25)],
    });

  this.getAthletes();


  }


  getAthletes(): void {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes.push(...athletes));
  }


  onSubmit(trainingFrm) {
    if (trainingFrm.valid) {
      const trainingFORM = trainingFrm.value;
      trainingFORM.training = this.training;

      trainingFORM.done = this.done;
      trainingFORM.equipment = this.equipment;
      trainingFORM.notes = this.notes;
      this.trainingService.addTraining(trainingFORM).subscribe();
      setTimeout(() => {
        // this.router.navigate(['athletelist']);
        // this.trainingFORMForm.value = false; // put this back after testing
        this.basketballForm.reset();  // put this back after testing
        this.fitnessForm.reset();  // put this back after testing
        this.footballForm.reset();  // put this back after testing
        // alert('Done');
        this.modalService.open('Done');
      }, 2000);
    } else {
    }
  }


  test(form) {
    console.log(form.value);
    this.trainingService.addTraining(form.value);
  }
}
