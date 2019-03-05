import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from './../../services/restaurants/restaurants.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantDetails:any;
  id:any;
  constructor(private service:RestaurantsService , private router:ActivatedRoute) { }

  getRestaurantDetail(){
    this.service.getRestaurantByID(this.id).subscribe((res) => {
      this.restaurantDetails = res;
      console.log(res);
    });
  }


ngOnInit() {
 this.id =parseInt(this.router.snapshot.paramMap.get('id'))
 this.getRestaurantDetail();
}

}
