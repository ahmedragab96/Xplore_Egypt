import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root'})

export class BookingService {
    constructor(private http: HttpClient) { }
    URL: any = 'https://immense-cove-87813.herokuapp.com';
    GetBookings(title: string) {
        return this.http.get(`${this.URL}/book/getFirstLink/:${title}`);
    }
}
