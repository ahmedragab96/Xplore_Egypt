import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { UserData } from './user-data.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class AuthServices {

    private private_token: string ;
    private authStatusListener = new Subject<boolean>();
    constructor (private http: HttpClient) {}


    getToken () {
        return this.private_token;
    }

    getauthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    login( email: string , password: string) {
        const authData: AuthData = {email: email , password: password};

        this.http.post<{token: string , error: string}>('http://localhost:3000/users/login', authData)
        .subscribe( Response => {
            if (Response.token)
                {
                const token = Response.token;
                this.private_token = token ;
                this.authStatusListener.next(true);
                }
            else {
                console.log(Response.error);
            }
        });
    }
    register(fname: string , lname: string ,
          email: string , password: string ,
          DOB: string , gender: string , nationality: string) {

            const userData: UserData = {fname: fname , lname: lname ,
                                        email: email , password: password ,
                                        DOB: DOB , gender: gender , nationality: nationality};

            this.http.post('http://localhost:3000/users/register', userData)
            .subscribe( Response => {
                console.log(Response);
            });
    }
    
    logout() {
        this.private_token = null;
        this.authStatusListener.next(false);
    }

}

