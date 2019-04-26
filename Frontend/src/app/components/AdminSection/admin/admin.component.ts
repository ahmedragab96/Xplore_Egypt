import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  links = [];

  ngOnInit(): void {
    this.links.push(
      { name: 'Dashboard', link: '/admin', icon: 'book' },
      { name: 'Charts', link: '/admin/charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
      // { name: 'Database', link: '/admin/database/hotels', icon: 'storage' },
    );
  }
  constructor(
    private router: Router,
  ) {}

  navigateTo(link) {
    console.log(link);
    this.router.navigate([link]);
  }
}
