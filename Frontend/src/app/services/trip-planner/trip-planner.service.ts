import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class TripPlannerService {
  constructor(private http: HttpClient,
    private route: ActivatedRoute, private router: Router) { }


  GetAllTrips() {
    return this.http.get('http://localhost:3000/trips/getall');
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
    return this.http.post('http://localhost:3000/users/addplan', body).subscribe(data => {
      console.log('POST Request is successful ', data);
    },
      error => { console.log('Error', error); });
  }


  loadPlannedTrips() {
    const id = this.decodeToken();
    return this.http.get('http://localhost:3000/users/getplan?id=' + id);
  }

  // trips section

  getTripByID(id) {
    // return this.http.get('http://localhost:3000/trips/getById?t.itemid='+id);
    return this.http.get('http://localhost:3000/trips/getById?id=' + id);
  }
}
