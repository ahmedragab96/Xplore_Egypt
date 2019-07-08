import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'
import {AuthServices} from './../../components/auth/auth.services'
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
  recommendedPlaces:any;
  recommendedRestaurants:any=[];
  loggedin:boolean=false;

  constructor(private service:RestaurantsService,
              private recservice:RecommendaionService,
              private authservice:AuthServices) { }

  restaurants: any;
  restaurantsgetallMostPopular:any;
  restaurantsgetallLeastPopular:any;
  allMostPopular:boolean=false;
  allLeastPopular:boolean=false;
  default = "../../../assets/images/noimage.png"
  getRestaurantsFromService(){
    this.service.GetAllRestaurants().subscribe((res) => {
      this.restaurants = res;
    });
  }

 getRecommended()
   {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
     for (var i = 0; i <this.recommendedPlaces.length; i++) {
      if(this.recommendedPlaces[i].type=="Restaurant")
        {console.log(i)
        this.recommendedRestaurants.push(this.recommendedPlaces[i])}
  }
    });
  }

  ngOnInit() {
    if (this.authservice.getisAuth()){
      this.loggedin=true;
    }

    this.getRestaurantsFromService();
    this.getRecommended()
  }


   getallMostPopular(){

   this.allMostPopular=true;
   this.allLeastPopular=false;
   this.service.getallMostPopular().subscribe((res) => {

      this.restaurantsgetallMostPopular = res;

      console.log(res);
    });

 }

getallLeastPopular(){
   this.allMostPopular=false;
   this.allLeastPopular=true;
   this.service.getallLeastPopular().subscribe((res) => {

      this.restaurantsgetallLeastPopular = res;

    });
}

}
