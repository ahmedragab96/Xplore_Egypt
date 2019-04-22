import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels/hotels.service';
import { Router } from '@angular/router'; 
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  recommendedPlaces:any;
  recommendedHotels:any=[];
  constructor(private service:HotelsService, private router: Router,
              private recservice:RecommendaionService) { }

  hotels: any;
  default = "../../../assets/images/noimage.png"
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
 getRecommended()
   {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
      console.log(res);
     for (var i = 0; i <this.recommendedPlaces.length; i++) {
      if(this.recommendedPlaces[i].type=="hotel")
        {console.log(i)
        this.recommendedHotels.push(this.recommendedPlaces[i])}
  }
  console.log(this.recommendedHotels)
    });
  }

  ngOnInit() {
    this.getHotelsFromService();
    this.getRecommended();
  }

}
