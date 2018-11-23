import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {
  displayedColumns: string[] = ['email', 'firstName', 'sport', 'active', 'gender', '_id'];
  dataSource = new MatTableDataSource(); //athletes from server
  athletes: any;
  constructor() { }

  ngOnInit() {
  }

}
