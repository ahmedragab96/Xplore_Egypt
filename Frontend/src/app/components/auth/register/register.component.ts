import {Component, OnInit} from '@angular/core';
import { AuthServices } from '../auth.services';
import { NgForm } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';


@Component ({
    templateUrl : './register.component.html',
    styleUrls : ['./register.component.css']
})

export class RegisterComponent  {
    
    isLoading = false ;
    
    constructor(public authService: AuthServices, private socialAuthService: AuthService) {}

    onregister(form: NgForm) {
        console.log(form.value);
        this.authService.register(form.value.fname , form.value.lname , form.value.email , form.value.password
            , form.value.DOB , form.value.gender , form.value.nationality );
    }

    public socialSignIn(socialPlatform: string) {

        let socialPlatformProvider;
        if (socialPlatform === 'facebook') {
          socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform === 'google') {
          socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                console.log(socialPlatform + ' sign in data : ' , userData);

              }
            );


        }
}
