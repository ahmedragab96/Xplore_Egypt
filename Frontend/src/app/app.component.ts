import { Component, OnInit } from '@angular/core';
import { AuthServices } from './components/auth/auth.services';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private notifier:NotifierService,private authService: AuthServices) {}
  title = 'app';
  
  ngOnInit() {
    this.authService.autoAuthUser();
  }
  
}
