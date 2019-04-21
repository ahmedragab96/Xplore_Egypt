import { Component, OnInit } from '@angular/core';
import {RecommendaionService} from './../../services/recommendation/recommendaion.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recommendedPlaces:any;

  constructor(private recservice:RecommendaionService) { }
   getRecommended()
   {
    this.recservice.getRecommended().subscribe((res) => {
      this.recommendedPlaces = res;
      console.log(res);
    });
  }
  ngOnInit() {
  	this.getRecommended();
  }

}
