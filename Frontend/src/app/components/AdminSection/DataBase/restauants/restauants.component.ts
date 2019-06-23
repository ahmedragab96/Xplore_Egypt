import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { RestaurantsService } from '../../../../services/restaurants/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestauantsComponent implements OnInit, AfterViewInit, OnDestroy {

  links = [];
  restaurants: any;
  displayedColumns: string[] = ['image', 'title', 'region', 'rating', 'priceHigh', 'priceLow', 'Delete'];
  dataSource = new MatTableDataSource();
  restaurantsSubscription: Subscription;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public restaurantService: RestaurantsService,
    private router: Router,
  ) { }


  navigateTo(link) {
    console.log(link);
    this.router.navigate([link]);
  }

  async ngOnInit() {
    this.restaurantsSubscription = await this.restaurantService.GetAllRestaurants().subscribe( (result: any) => {
      this.restaurants = result;
      this.dataSource.data = this.restaurants;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.restaurantsSubscription.unsubscribe();
  }

  delete(restaurant: any) {
    console.log(restaurant);
  }

  add() {
    console.log('restaurant');
    this.router.navigate(['admin/database/hotels/addHotel']);
  }

}
