import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  recommendedPlaces:any;
  recommendedRestaurants:any=[];
  constructor(private service:RestaurantsService,
              private recservice:RecommendaionService) { }

  restaurants: any;
  default = "../../../assets/images/noimage.png"
  getRestaurantsFromService(){
    this.service.GetAllRestaurants().subscribe((res) => {
      this.restaurants = res;
      console.log(res);
    });
  }

 getRecommended()
   {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
      console.log(res);
     for (var i = 0; i <this.recommendedPlaces.length; i++) {
      if(this.recommendedPlaces[i].type=="Restaurant")
        {console.log(i)
        this.recommendedRestaurants.push(this.recommendedPlaces[i])}
  }
  console.log(this.recommendedRestaurants)
    });
  }

  ngOnInit() {
    this.getRestaurantsFromService();
    this.getRecommended()
  }

}
