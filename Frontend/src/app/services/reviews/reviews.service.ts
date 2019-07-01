import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {NotifierService} from 'angular-notifier'
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private http: HttpClient, private notifier: NotifierService) { }

  URL: any = 'https://immense-cove-87813.herokuapp.com';
  decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }

  PostAReview(placeid, body) {
    console.log(placeid);
    console.log(body);
    const userid = this.decodeToken()
    return this.http.post( this.URL + '/reviews/add/' + userid + '/' + placeid, body).subscribe(data => {
      console.log('POST Request is successful ', data);
    },
      error => { console.log('Error', error); });
  }


   getReviewforPlace(placeID){
     return this.http.get( this.URL + '/reviews//getPlaceReviews/' + placeID)
   }

}

  //     addReviewImage(image: File, id) {
  //   const formData = new FormData();
  //   formData.append('avatar', image);
  //   return this.http.put('http://localhost:3000/reviews/addpic/'+id+"/",formData).subscribe(data => {
  //     console.log('avatar Updated successfully ', data);
  //     this.notifier.notify('success', 'Your picture is added to review successfully  !');
  //   },
  //     error => { console.log('Error', error); });
  // }
  // }
