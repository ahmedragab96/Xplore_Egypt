import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private service:RestaurantsService) { }

  restaurants: any;
  getRestaurantsFromService(){
    this.service.GetAllRestaurants().subscribe((res) => {
      this.restaurants = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.getRestaurantsFromService();
  }

}
