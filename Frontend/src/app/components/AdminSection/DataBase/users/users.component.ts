import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/users/users.service';
import { Observable, Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  links = [];
  users: any;
  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'gender', 'Nationality'];
  dataSource = new MatTableDataSource();
  usersSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public userService: UserService,
  ) { }

  async ngOnInit() {
    this.links.push(
      { name: 'Dashboard', link: 'dashboard', icon: 'book' },
      { name: 'Charts', link: 'charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
      { name: 'Database', link: 'Database', icon: 'storage' },
    );
    this.usersSubscription = await this.userService.GetAllUsers().subscribe( (result: any) => {
      this.users = result.results;
      this.dataSource.data = this.users;
    });
    this.dataSource.paginator = this.paginator;
  }
}
