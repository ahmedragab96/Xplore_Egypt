import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})

export class MailService{
    constructor(private http: HttpClient,private notifier: NotifierService, private router: Router) { }

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
            console.log('mail is sent successfully ', data);},
            error => { console.log('Error', error); });
    }

    resetPassword(userMAil:any){
      const body: any = {};
      body['mail']=userMAil;

      return this.http.post( this.URL + '/mail/resetPassword', body).subscribe(data => {
        console.log('mail with password is sent successfully ', data);
        this.notifier.notify('success', 'Mail is sent to you with new password to log in!');
        this.router.navigate(['/login']);
      },
        error => { console.log('Error', error);this.notifier.notify('error',"this mail haven't registered before , please check your mail or register"); });
    }
}
