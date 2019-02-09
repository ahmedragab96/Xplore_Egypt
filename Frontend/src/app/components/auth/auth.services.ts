import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { UserData } from './user-data.model';

@Injectable({ providedIn: 'root'})

export class AuthServices {
    constructor (private http: HttpClient) {}

    login( email: string , password: string) {
        const authData: AuthData = {email: email , password: password};

        this.http.post('http://localhost:3000/users/login', authData)
        .subscribe( Response => {
            console.log(Response);
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

}

