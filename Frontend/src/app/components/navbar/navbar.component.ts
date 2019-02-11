import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServices } from '../auth/auth.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy{
  private authlistenerSubs: Subscription;
  userIsAuthenticated = false;

  constructor(private authService: AuthServices) {}

  ngOnInit() {
    this.authlistenerSubs = this.authService
    .getauthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  
  onlogout() {
    this.authService.logout();
  }
  
  ngOnDestroy() {
    this.authlistenerSubs.unsubscribe();
  }

}
