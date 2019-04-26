import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../../services/users/users.service';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
  links = [];
  users: any;
  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'gender', 'Nationality'];
  dataSource = new MatTableDataSource();
  usersSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public userService: UserService,
    public router: Router,
  ) { }

  async ngOnInit() {
    this.links.push(
      { name: 'Dashboard', link: '/admin', icon: 'book' },
      { name: 'Charts', link: 'charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
    );
    this.usersSubscription = await this.userService.GetAllUsers().subscribe( (result: any) => {
      this.users = result.results;
      this.dataSource.data = this.users;
    });
    this.dataSource.paginator = this.paginator;
  }

  navigateTo(link) {
    console.log(link);
    this.router.navigate([link]);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
