import { Component, OnInit } from '@angular/core';
import { Athlete } from '../entities/athlete';
import { AthleteService } from '../services/athlete.service';
import { MatTableDataSource } from '@angular/material';


export interface OurAthletes {
  email: string;
  _id: string;
  creator: string;
  firstName: string;
  lastName: string;
  age: string;
  height: string;
  dateCreated: string;
  sport: string;
  phone: string;
  active: string;
  __v: number;
  gender: string;
}


const USERS_DATA: OurAthletes[] = [
  {
    "email" : "zzzzzz",
    "_id" : "5bf08466a69d823becc64bde",
    "creator" : "5bed0672214a3f160c3f7c6d",
    "firstName" : "zzzzzz",
    "lastName" : "zzzzzzz",
    "age" : "zzzzzzz",
    "height" : "undefined",
    "dateCreated" : "2018-11-15",
    "sport" : "fdfdf",
    "phone" : "zzzzzzzzz",
    "active" : "false",
    "__v" : 0,
    "gender": "other"
}

];


@Component({
  selector: 'app-athelete-list',
  templateUrl: './athelete-list.component.html',
  styleUrls: ['./athelete-list.component.scss']
})
export class AtheleteListComponent implements OnInit {
  athletes: Athlete[] = [];


  displayedColumns: string[] = ['email', 'firstName', 'sport', 'active', 'gender', '_id'];
  dataSource = new MatTableDataSource(this.athletes); //athletes from server

  constructor(private athleteService: AthleteService) { }


  ngOnInit() {
    this.getAthletes();
  }



  getAthletes(): void {
    this.athleteService.getAthletes()
      // .subscribe(athletes => this.athletes = athletes);
      .subscribe(athletesfromsrv => this.updateTable(athletesfromsrv));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 updateTable(athletesfromsrv) {
   this.dataSource = new MatTableDataSource(athletesfromsrv);
 }

 edit(id) {
   console.log(id);
 }
 delete(id) {
   console.log(id);
 }
}
