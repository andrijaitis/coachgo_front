import { Injectable, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService implements OnInit {
  ngOnInit(): void { }
 
  addTraining(training) {
      console.log('stuff inside training service');
    return this.http.post(environment.apiUrl + '/training', training);
  }



  getTrainings(id: string): Observable<Athlete> {
    return this.http.post<Athlete>(environment.apiUrl + '/trainings', id);
  }

  getAllTrainings() {
    return this.http.get(environment.apiUrl + '/alltrainings');
  }

  constructor(private http: HttpClient ) { }
}
