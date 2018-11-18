import { Injectable, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
 'Authorization': 'Bearer ' + localStorage.getItem('token')
})};


@Injectable({
  providedIn: 'root'
})
export class AthleteService implements OnInit {
  ngOnInit(): void { }
 

  addAthlete(athlete: Athlete): Observable<Athlete> {
    return this.http.post<Athlete>(environment.apiUrl + '/athlete', athlete);
  }

  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(environment.apiUrl + '/athletes');
  }

  deleteAthlete(id: String ) {
    const url = environment.apiUrl + '/athlete' + '/' + `${id}`;
    return this.http.delete(url);
  }

  constructor(private http: HttpClient , private userService: UserService) { }
}
