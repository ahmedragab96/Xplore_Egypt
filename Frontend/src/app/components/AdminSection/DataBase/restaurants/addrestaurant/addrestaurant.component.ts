import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantsService } from '../../../../../services/restaurants/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

  constructor(
    public restaurantService: RestaurantsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    console.log(form.value);
    this.restaurantService.addRestaurant(form.value);
    this.router.navigate(['admin/database/restaurants']);
  }
}
