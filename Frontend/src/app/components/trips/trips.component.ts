import { Component, OnInit } from '@angular/core';
import { TripPlannerService } from '../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router';
import { RecommendaionService } from './../../services/recommendation/recommendaion.service';
import { AuthServices } from './../../components/auth/auth.services';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  recommendedPlaces: any;
  recommendedTrips: any = [];
  loggedin = false;
  constructor(private service: TripPlannerService, private router: Router,
    private recservice: RecommendaionService,
    private authservice: AuthServices) { }

  itemsPerPage: any;
  tripsgetallMostPopular: any;
  tripsgetallLeastPopular: any;
  allMostPopular = false;
  allLeastPopular = false;
  p = 1;
  trips: any;
  default = '../../../assets/images/noimage.png';

  getTripsFromService() {
    this.service.GetAllTrips().subscribe((res) => {
      this.trips = res;
    });
  }
  getRecommended() {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
      console.log(res);
      for (let i = 0; i < this.recommendedPlaces.length; i++) {
        if (this.recommendedPlaces[i].type === 'trip') {
          console.log(i);
          this.recommendedTrips.push(this.recommendedPlaces[i]);
        }
      }
      console.log(this.recommendedTrips);
    });
  }

  ViewTripDetail(id: any) {
    const url: string = 'trips/' + id;
    this.router.navigateByUrl(url);
  }



  ngOnInit() {
    if (this.authservice.getisAuth()) {
      this.loggedin = true;
    }
    this.getTripsFromService();
    this.getRecommended();
  }
  getallMostPopular() {

    this.allMostPopular = true;
    this.allLeastPopular = false;
    this.service.getallMostPopular().subscribe((res) => {

      this.tripsgetallMostPopular = res;

    });

  }

  getallLeastPopular() {
    this.allMostPopular = false;
    this.allLeastPopular = true;
    this.service.getallLeastPopular().subscribe((res) => {

      this.tripsgetallLeastPopular = res;

    });
  }
}
