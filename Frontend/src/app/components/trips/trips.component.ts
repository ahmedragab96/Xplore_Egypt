import { Component, OnInit } from '@angular/core';
import {TripPlannerService} from '../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  
  constructor(private service:TripPlannerService, private router: Router) { }

  itemsPerPage:any;
  p: number = 1;
  trips: any;
  getTripsFromService(){
    this.service.GetAllTrips().subscribe((res) => {
      this.trips = res;
      console.log(res);
    });
  }


  ViewTripDetail(id : any){
    let url: string = "trips/" + id
         this.router.navigateByUrl(url);
      }



  ngOnInit() {
    this.getTripsFromService();
  }

}
