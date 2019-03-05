import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels/hotels.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private service:HotelsService) { }

  hotels: any;
  getHotelsFromService(){
    this.service.GetAllHotels().subscribe((res) => {
      this.hotels = res;
      console.log(res);
    });
  }


  ngOnInit() {
    this.getHotelsFromService();
  }

}
