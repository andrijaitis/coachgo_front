import { Injectable } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable({
  providedIn: 'root'
})
export class AthleteService {


  addAthlete(athlete: Athlete): Observable<Athlete> {
    console.log(athlete);
    return this.http.post<Athlete>(environment.apiUrl + '/athlete', athlete, httpOptions);
  }

  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(environment.apiUrl + '/athletes');
  }

  constructor(private http: HttpClient) { }
}
