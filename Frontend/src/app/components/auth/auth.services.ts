import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { UserData } from './user-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {NotifierService} from 'angular-notifier'

@Injectable({ providedIn: 'root'})

export class AuthServices {

    private private_token: string ;
    private isAuth = false ;
    private Timer: any;
    private authStatusListener = new Subject<boolean>();
    URL: any = 'https://immense-cove-87813.herokuapp.com';
    constructor (private notifier: NotifierService,private http: HttpClient, private router: Router) {}


    getToken () {
        return this.private_token;
    }
    getisAuth () {
        return this.isAuth;
    }

    getauthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    private setAuthTimer (duration: number) {
        console.log( 'Setting timer: ' + duration);
        this.Timer =  setTimeout(() => {
            this.logout();
        } , duration * 1000 );
    }

    login( email: string , password: string) {
        const authData: AuthData = {email: email , password: password};

        this.http.post<{token: string , error: string , expireIn: number}>(this.URL+'/users/login', authData)
        .subscribe( Response => {
            if (Response.token) {
                this.notifier.notify('success', 'you successfully logged in !');
                const expiration = Response.expireIn ;
                this.setAuthTimer(expiration);
                const token = Response.token;
                this.private_token = token ;
                this.isAuth = true ;
                this.authStatusListener.next(true);
                const now = new Date () ;
                const expirationDte = new Date (now.getTime () + (expiration * 1000));
                this.saveAuthData(token, expirationDte );
                this.router.navigate(['/home']);
                } else {
                console.log(Response.error);
                this.notifier.notify('error', Response.error);
            }
        });
        //return this.http.post<{token: string , error: string , expireIn: number}>('http://localhost:3000/users/login', authData)
    }
    register(fname: string , lname: string ,
          email: string , password: string ,
          /*image: File ,*/ DOB: string , gender: string , nationality: string) {
              console.log("in auth");

            const userData = new FormData();
            userData.append('fname', fname);
            userData.append('lname', lname);
            userData.append('email', email);
            userData.append('password', password);
            userData.append('DOB', DOB);
            //userData.append('image', image , fname);
            userData.append('gender', gender);
            userData.append('nationality', nationality);
            // const userData: UserData = {fname: fname , lname: lname ,
            //                             email: email , password: password ,
            //                             DOB: DOB , image: image , gender: gender , : nationality};

            this.http.post('http://localhost:3000/users/register', userData).subscribe(
              (response: any) => {
                  console.log(response)
                    this.notifier.notify('success', 'You registered successfully, please login to continue');
                      },
              (err: HttpErrorResponse) => {
                  console.log(err);
                    this.notifier.notify('error', err.statusText);
      }
    );              
    }

    socialSignUp(body) {
        // console.log(body)
        // calling the post function
        return this.http.post('http://localhost:3000/users/socialSignUp', body);
    }

    logout() {
        this.notifier.notify('success', 'you successfully logged out !');
        this.private_token = null;
        this.authStatusListener.next(false);
        this.isAuth = false;
        clearTimeout(this.Timer);
        this.clearAuthData();
        this.router.navigate(['/login']);

    }

    private saveAuthData (token: string, expirationDate: Date) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString() );
    }

    private clearAuthData () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');

    }

    private getAuthData () {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');

        if ( !token || ! expirationDate) {
            return;
        }

        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };

    }

    autoAuthUser() {
        const Authinfo =  this.getAuthData();
        if ( ! Authinfo) {
            return;
        }
        const now = new Date() ;
        const expiresIn = Authinfo.expirationDate.getTime() - now.getTime() ;

        if (expiresIn > 0) {
            this.private_token = Authinfo.token ;
            this.isAuth = true ;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

}

