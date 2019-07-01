import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  URL: any = 'https://immense-cove-87813.herokuapp.com';

  GetAllRestaurants() {
    return this.http.get( this.URL + '/restaurants/getall');
  }

  getRestaurantByID(id) {
    return this.http.get( this.URL + '/restaurants/getById?id=' + id);
  }

  addRestaurant(restDetails) {
    return this.http.post( this.URL + '/restaurants/addrestaurant', restDetails).subscribe(data => {
      console.log('Restaurant has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteRestaurant (id) {
    return this.http.delete( this.URL + `/restaurants/delete/:id=${id}`);
  }
}
