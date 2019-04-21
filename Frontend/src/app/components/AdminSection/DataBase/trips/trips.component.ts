import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { TripPlannerService } from '../../../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsCRUDComponent implements OnInit, AfterViewInit, OnDestroy {

  links = [];
  trips: any;
  displayedColumns: string[] = ['image', 'includes', 'experience', 'price', 'duration'];
  dataSource = new MatTableDataSource();
  tripsSubscription: Subscription;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public tripsService: TripPlannerService,
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
    this.tripsSubscription = await this.tripsService.GetAllTrips().subscribe( (result: any) => {
      this.trips = result;
      this.dataSource.data = this.trips;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.tripsSubscription.unsubscribe();
  }

}

