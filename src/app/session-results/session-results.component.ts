import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AthleteService } from '../services/athlete.service';

@Component({
  selector: 'app-session-results',
  templateUrl: './session-results.component.html',
  styleUrls: ['./session-results.component.scss']
})
export class SessionResultsComponent implements OnInit {

 
  constructor(
    private route: ActivatedRoute,
    private athleteService: AthleteService,
  ) { }

  ngOnInit() {
    // this.getAthelete();

  }

  //  getAthelete(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.athleteService.getAthlete(id)
  //     .subscribe(athletefromSrv => this.athlete = athletefromSrv);
  // }

}
