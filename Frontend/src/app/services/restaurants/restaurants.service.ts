import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  GetAllRestaurants() {
    return this.http.get('http://localhost:3000/restaurants/getall');
  }

  getRestaurantByID(id) {
    return this.http.get('http://localhost:3000/restaurants/getById?id=' + id);
  }

  addRestaurant(restDetails) {
    return this.http.post('http://localhost:3000/restaurants/addrestaurant', restDetails).subscribe(data => {
      console.log('Restaurant has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteRestaurant (id) {
    return this.http.delete(`http://localhost:3000/restaurants/delete/:id=${id}`);
  }
}
