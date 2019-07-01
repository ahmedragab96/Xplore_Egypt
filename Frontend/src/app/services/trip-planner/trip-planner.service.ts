import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {NotifierService} from 'angular-notifier'
@Injectable({
  providedIn: 'root'
})
export class TripPlannerService {
  constructor(private http: HttpClient,private notifier: NotifierService,
    private route: ActivatedRoute, private router: Router) { }
    URL: any = 'https://immense-cove-87813.herokuapp.com';


  GetAllTrips() {
    return this.http.get( this.URL + '/trips/getall');
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }


  // Trip Planner section
  savePlannedTrips(trips) {
    const body: any = {};
    body['id'] = this.decodeToken();
    body['plan'] = trips;
    console.log(body);
    return this.http.post( this.URL + '/users/addplan', body).subscribe(data => {
      console.log('POST Request is successful ', data);
      this.notifier.notify('success', 'Your Trips are saved to Calendar !');
    },
      error => { console.log('Error', error);
      this.notifier.notify('error', error); });
  }


  loadPlannedTrips() {
    const id = this.decodeToken();
    return this.http.get( this.URL + '/users/getplan?id=' + id);
  }

  // trips section

  getTripByID(id) {
    // return this.http.get('http://localhost:3000/trips/getById?t.itemid='+id);
    return this.http.get( this.URL + '/trips/getById?id=' + id);
  }
  addTrip(tripDetails) {
    return this.http.post( this.URL + '/trips/addtrip', tripDetails).subscribe(data => {
      console.log('Trip has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteTrip (id) {
    return this.http.delete( this.URL + `/trips/delete/:id=${id}`);
  }
}
