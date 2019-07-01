import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }
  URL: any = 'https://immense-cove-87813.herokuapp.com';

  GetAllHotels() {
    return this.http.get( this.URL + '/hotels/getall');
  }

  getHotelByID(id) {
    return this.http.get( this.URL + '/hotels/getById?id=' + id);
  }

  addHotel(hotelDetails) {
    return this.http.post( this.URL + '/hotels/addhotel', hotelDetails).subscribe(data => {
      console.log('Hotel has been added successfully ', data);
    },
      error => { console.log('Error', error); });
  }

  deleteHotel (id) {
    return this.http.delete( this.URL + `/hotels/delete/:id=${id}`);
  }
}
