import { Component, OnInit } from '@angular/core';
import './../../index.js';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {
  constructor() { }
 

  trips =[
    { "name": "Trip 1", "selected": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { "name": "Trip 2", "selected": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { "name": "Trip 3", "selected": false, "description": "Sed ut perspiciatis unde omnis iste natus error sit vol?" },
    { "name": "Trip 4", "selected": false, "description": "On the other hand, we denounce with righteous indignati pains to avoid worse pains." },
    { "name": "Trip 5", "selected": false, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit dui, a pretium elit lobortis pretium." }]


  ngOnInit() {
  }
  
 

}
