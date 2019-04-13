import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material';
import { HotelsService } from '../../../../services/hotels/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})

export class HotelsCRUDComponent implements OnInit {

  links = [];
  hotels: any;
  displayedColumns: string[] = ['image', 'title', 'region', 'rating', 'priceHigh', 'priceLow'];
  dataSource = new MatTableDataSource();
  usersSubscription: Subscription;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public hotelService: HotelsService,
  ) { }

  async ngOnInit() {
    this.links.push(
      { name: 'Dashboard', link: 'dashboard', icon: 'book' },
      { name: 'Charts', link: 'charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
      { name: 'Database', link: 'Database', icon: 'storage' },
    );
    this.usersSubscription = await this.hotelService.GetAllHotels().subscribe( (result: any) => {
      this.hotels = result;
      this.dataSource.data = this.hotels;
      this.isLoading = false;
    });
    this.dataSource.paginator = this.paginator;
  }

}
