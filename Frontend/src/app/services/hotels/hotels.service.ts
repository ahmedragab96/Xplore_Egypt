import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  GetAllHotels() {
    return this.http.get('http://localhost:3000/hotels/getall');
  }

  getHotelByID(id) {
    return this.http.get('http://localhost:3000/hotels/getById?id=' + id);
  }

  addHotel(hotelDetails) {
    return this.http.post('http://localhost:3000/hotels/addhotel', hotelDetails).subscribe(data => {
      console.log('Hotel has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteHotel (id) {
    return this.http.delete(`http://localhost:3000/hotels/delete/:id=${id}`);
  }
}
