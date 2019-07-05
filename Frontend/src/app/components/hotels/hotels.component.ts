import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels/hotels.service';
import { Router } from '@angular/router'; 
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'
import {AuthServices} from './../../components/auth/auth.services'
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  recommendedPlaces:any;
  recommendedHotels:any=[];
  loggedin:boolean=false;
  constructor(private service:HotelsService, private router: Router,
              private recservice:RecommendaionService,
              private authservice:AuthServices) { }

  hotels: any;
  hotelsOrderPriceAsc:any;
  hotelsOrderPriceDESC:any;
  hotelsgetallMostPopular:any;
  hotelsgetallLeastPopular:any;
  allOrderPriceAsc:boolean=false;
  allOrderPriceDESC:boolean=false;
  allMostPopular:boolean=false;
  allLeastPopular:boolean=false;
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
      if(this.recommendedPlaces[i].type=="Hotel")
        {console.log(i)
        this.recommendedHotels.push(this.recommendedPlaces[i])}
  }
  console.log(this.recommendedHotels)
    });
  }

  ngOnInit() {
        if (this.authservice.getisAuth()){
      this.loggedin=true;
    }
    this.getHotelsFromService();
    this.getRecommended();
  }
 

 getallOrderPriceAsc(){
   this.allOrderPriceAsc=true;
   this.allOrderPriceDESC=false;
   this.allMostPopular=false
   this.allLeastPopular=false;
   this.service.getallOrderPriceAsc().subscribe((res) => {

      this.hotelsOrderPriceAsc = res;

      console.log(res);
    });
 }

 getallOrderPriceDESC(){
   this.allOrderPriceDESC=true
   this.allOrderPriceAsc=false;
   this.allMostPopular=false;
   this.allLeastPopular=false;
      this.service.getallOrderPriceDESC().subscribe((res) => {

      this.hotelsOrderPriceDESC = res;

      console.log(res);
    });

 }

 getallMostPopular(){
   this.allOrderPriceDESC=false
   this.allOrderPriceAsc=false;
   this.allMostPopular=true;
   this.allLeastPopular=false;
   this.service.getallMostPopular().subscribe((res) => {

      this.hotelsgetallMostPopular = res;

      console.log(res);
    });

 }

getallLeastPopular(){
   this.allOrderPriceDESC=false
   this.allOrderPriceAsc=false;
   this.allMostPopular=false;
   this.allLeastPopular=true;
   this.service.getallLeastPopular().subscribe((res) => {

      this.hotelsgetallLeastPopular = res;

      console.log(res);
    });
}
}
