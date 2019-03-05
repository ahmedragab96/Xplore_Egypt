import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http:HttpClient) { }

  GetAllHotels() {
    return this.http.get("http://localhost:3000/hotels/getall")
  }

  getHotelByID(id){
    return this.http.get("http://localhost:3000/hotels/getById?id="+id);
  }
}
