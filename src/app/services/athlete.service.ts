import { Injectable } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
 'Authorization': 'Bearer ' + localStorage.getItem('token')
})};

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  //  token = this.userService.getToken();
  // Authorization = {'Authorization': 'Bearer ' + this.userService.getToken()};

  addAthlete(athlete: Athlete): Observable<Athlete> {
    localStorage.setItem('token', this.userService.getToken());
console.log('shit i got back ', this.userService.getToken() );
    return this.http.post<Athlete>(environment.apiUrl + '/athlete', athlete, httpOptions);
  }

  getAthletes(): Observable<Athlete[]> {
    localStorage.setItem('token', this.userService.getToken());
    return this.http.get<Athlete[]>(environment.apiUrl + '/athletes', httpOptions);
  }

  constructor(private http: HttpClient , private userService: UserService) { }
}
