import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TripPlannerService {

  constructor(private http:HttpClient) { }
    GetAllTrips() {
    return this.http.get("http://localhost:3000/trips/getall")
  }
}
