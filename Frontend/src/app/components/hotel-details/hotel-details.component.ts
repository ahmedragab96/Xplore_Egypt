import { Component, OnInit } from '@angular/core';
import {HotelsService} from './../../services/hotels/hotels.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotelDetails:any;
  id:any;
  constructor(private service:HotelsService , private router:ActivatedRoute) { }

  getHotelDetail(){
    this.service.getHotelByID(this.id).subscribe((res) => {
      this.hotelDetails = res;
      console.log(res);
    });
  }


ngOnInit() {
 this.id =parseInt(this.router.snapshot.paramMap.get('id'));
 this.getHotelDetail();
}

}
