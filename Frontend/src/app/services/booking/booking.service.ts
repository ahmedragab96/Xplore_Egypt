import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root'})

export class BookingService{
    constructor(private http: HttpClient) { }
    GetBookings(title:string){
        return this.http.get('https://www.googleapis.com/customsearch/v1?cx=010207221007117448908%3Aquimk_k6jty&key=AIzaSyCB8aGtZX4yiHJWdtLPgT1JyU9IE6JelVk&q='+title);
    }
}