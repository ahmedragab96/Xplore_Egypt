import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsCRUDComponent implements OnInit, AfterViewInit, OnDestroy {

  links = [];
  hotels: any;
  displayedColumns: string[] = ['image', 'title', 'region', 'rating', 'priceHigh', 'priceLow', 'Edit'];
  dataSource = new MatTableDataSource();
  hotelsSubscription: Subscription;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public hotelService: HotelsService,
    private router: Router,
  ) { }


  navigateTo(link) {
    console.log(link);
    this.router.navigate([link]);
  }

  async ngOnInit() {
    this.links.push(
      { name: 'Dashboard', link: '/admin', icon: 'book' },
      { name: 'Charts', link: 'charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
    );
    this.hotelsSubscription = await this.hotelService.GetAllHotels().subscribe( (result: any) => {
      this.hotels = result;
      this.dataSource.data = this.hotels;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.hotelsSubscription.unsubscribe();
  }

  edit(hotel: any) {
    this.router.navigate([`admin/database/hotels/${hotel.id}`]);
  }

}
