import { Component, OnInit } from '@angular/core';
import {TripPlannerService} from './../../services/trip-planner/trip-planner.service'
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
tripDetails:any;
id:any;
  constructor(private service:TripPlannerService , private router:ActivatedRoute) { }

  getTripDetail(){
       this.service.getTripByID(this.id).subscribe((res) => {
      this.tripDetails = res;
      console.log(res);
    });
  }


  ngOnInit() {
  	this.id =parseInt(this.router.snapshot.paramMap.get('id'))
  	this.getTripDetail();
  }

}
