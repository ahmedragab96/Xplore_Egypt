import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http:HttpClient) { }

  GetAllRestaurants() {
    return this.http.get("http://localhost:3000/restaurants/getall")
  }

  getRestaurantByID(id){
    return this.http.get("http://localhost:3000/restaurants/getById?id="+id);
  }
}
