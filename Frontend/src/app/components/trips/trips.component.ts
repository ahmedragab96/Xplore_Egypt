import { Component, OnInit } from '@angular/core';
import {TripPlannerService} from '../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router'; 
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'
import {AuthServices} from './../../components/auth/auth.services'


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  recommendedPlaces:any;
  recommendedTrips:any=[];
  loggedin:boolean=false;  
  constructor(private service:TripPlannerService, private router: Router,
              private recservice:RecommendaionService,
              private authservice:AuthServices) { }

  itemsPerPage:any;
  p: number = 1;
  trips: any;
  default = "../../../assets/images/noimage.png"

  getTripsFromService(){
    this.service.GetAllTrips().subscribe((res) => {
      this.trips = res;
      console.log(res);
    });
  }
 getRecommended()
   {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
      console.log(res);
     for (var i = 0; i <this.recommendedPlaces.length; i++) {
      if(this.recommendedPlaces[i].type=="trip")
        {console.log(i)
        this.recommendedTrips.push(this.recommendedPlaces[i])}
  }
  console.log(this.recommendedTrips)
    });
  }

  ViewTripDetail(id : any){
    let url: string = "trips/" + id
         this.router.navigateByUrl(url);
      }



  ngOnInit() {
    if (this.authservice.getisAuth()){
      this.loggedin=true;
    }    
    this.getTripsFromService();
    this.getRecommended()
  }

}
