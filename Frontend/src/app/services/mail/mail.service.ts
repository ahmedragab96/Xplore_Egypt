import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})

export class MailService{
    constructor(private http: HttpClient) { }

    URL: any = 'https://immense-cove-87813.herokuapp.com';

    decodeToken() {
        const token = localStorage.getItem('token');
        const payload = jwt_decode(token);
        console.log(payload);
        const userId = payload.userId;
        return userId;
      }

      sendMail(savedTrips:any){
        const body: any = {};
        body['id'] = this.decodeToken();
        body['plan'] = savedTrips;
        console.log(body);
        return this.http.post( this.URL + '/mail', body).subscribe(data => {
            console.log('POST Request is successful ', data);})
    }
}
