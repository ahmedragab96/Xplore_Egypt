import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { RestaurantsService } from '../../../../services/restaurants/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsCRUDComponent implements OnInit, AfterViewInit, OnDestroy {

  links = [];
  restaurants: any[];
  displayedColumns: string[] = ['image', 'title', 'region', 'rating', 'phone', 'Delete'];
  dataSource = new MatTableDataSource();
  restaurantsSubscription: Subscription;
  isLoading = true;
  length = 0;

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
      this.length = result.length;
      this.dataSource.data = this.restaurants;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.paginator.page.subscribe(
    //   (event) => console.log(event));
  }

  ngOnDestroy(): void {
    this.restaurantsSubscription.unsubscribe();
  }

  delete(restaurant: any) {
    console.log(restaurant);
  }

  add() {
    console.log('restaurant');
    this.router.navigate(['admin/database/restaurants/addRestaurant']);
  }

}
