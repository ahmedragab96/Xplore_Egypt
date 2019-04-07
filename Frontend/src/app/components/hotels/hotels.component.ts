import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels/hotels.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private service:HotelsService, private router: Router) { }

  hotels: any;
  getHotelsFromService(){
    this.service.GetAllHotels().subscribe((res) => {
      this.hotels = res;
      console.log(res);
    });
  }

  // ViewHotelDetail(id : any){
  //   let url: string = "hotels/" + id
  //        this.router.navigateByUrl(url);
  //     }


  ngOnInit() {
    this.getHotelsFromService();
  }

}
