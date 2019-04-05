import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  links = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
public pieChartType = 'pie';

public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
public radarChartData = [
  {data: [120, 130, 180, 70], label: '2017'},
  {data: [90, 150, 200, 45], label: '2018'}
];
public radarChartType = 'radar';

public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
public doughnutChartType = 'doughnut';


  ngOnInit(): void {
    this.links.push(
      { name: 'Dashboard', link: 'dashboard', icon: 'book' },
      { name: 'Charts', link: 'charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
      { name: 'Database', link: 'Database', icon: 'storage' },
    );
  }
}
