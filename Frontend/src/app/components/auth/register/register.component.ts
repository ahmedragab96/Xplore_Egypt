import {Component, OnInit} from '@angular/core';
import { AuthServices } from '../auth.services';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
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
    // imagepreview: string | ArrayBuffer;
    // image_file = null;

    // onImagePicked(event: Event) {
    //   console.log(event);
    //   const image_file = (event.target as HTMLInputElement).files[0];
    //   const reader = new FileReader();
    //   console.log(image_file);
    //   reader.onload = () => {
    //     this.imagepreview = reader.result;
    //   };
    //   reader.readAsDataURL(image_file);
    // }

    constructor(private notifier: NotifierService,public authService: AuthServices, private socialAuthService: AuthService) {}
    onregister(form: NgForm) {
        console.log(form.value);
        this.authService.register(form.value.fname , form.value.lname , form.value.email , form.value.password
           , form.value.DOB , form.value.gender , form.value.nationality ).subscribe(
      (response: any) => {
        this.notifier.notify('success', 'User registered successfully, please login to continue');
      }
      )
       }
    

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform === 'facebook') {
          socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform === 'google') {
          socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        console.log(socialPlatformProvider);
        this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
            console.log(userData);
         });

        }
}
