import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class TripPlannerService {
  constructor(private http:HttpClient) { }
    GetAllTrips() {
    return this.http.get("http://localhost:3000/trips/getall")
  }

  decodeToken(){
  let token = localStorage.getItem("token")
  let payload = jwt_decode(token)
  console.log(payload);
  let userId = payload.userId;
  return userId;
  }

  savePlannedTrips(body){
  	body["userId"]=this.decodeToken();
  	console.log(body);

  }


  loadPlannedTrips(){
  	
  }


}
