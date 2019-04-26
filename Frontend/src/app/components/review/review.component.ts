import { Component, OnInit,Input } from '@angular/core';
import {ReviewsService} from './../../services/reviews/reviews.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 @Input() placeid:number;
 @Input() currentRate:number;
  constructor(private reviewsService:ReviewsService) { }
  review(ReviewForm){
  	console.log(this.placeid)
  	console.log(ReviewForm)
  	this.reviewsService.PostAReview(this.placeid,ReviewForm.value)
  }
    ngOnInit() {
  }

}
