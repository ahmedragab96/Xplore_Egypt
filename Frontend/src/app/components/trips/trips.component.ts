import { Component, OnInit } from '@angular/core';
import {TripPlannerService} from '../../services/trip-planner/trip-planner.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  
  constructor(private service:TripPlannerService) { }

  itemsPerPage:any;
  p: number = 1;
  trips: any;
  getTripsFromService(){
    this.service.GetAllTrips().subscribe((res) => {
      this.trips = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.getTripsFromService();
  }

}
