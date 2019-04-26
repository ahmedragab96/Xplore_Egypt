import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
    decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }
  constructor(private http:HttpClient) { }
    PostAReview(placeid,body) {
    	console.log(placeid)
    	console.log(body)
    let userid=this.decodeToken()
    return this.http.post("http://localhost:3000/reviews/add/"+userid+"/"+placeid,body).subscribe(data => {
      console.log('POST Request is successful ', data);
    },
      error => { console.log('Error', error); });
  }
}
