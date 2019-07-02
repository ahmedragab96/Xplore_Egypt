import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RecommendaionService {

  constructor(private http:HttpClient) { }
  URL: any = 'https://immense-cove-87813.herokuapp.com';
    decodeToken() {
    const token = localStorage.getItem('token');
    const payload = jwt_decode(token);
    console.log(payload);
    const userId = payload.userId;
    return userId;
  }
    getRecommended() {
      let id=this.decodeToken();
      return this.http.get(URL+"/recommend?id="+id)
      
    // return this.http.get("http://localhost:3000/recommend?id="+id)
  }
}
