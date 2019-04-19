import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServices } from '../auth.services';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
var RegisterComponent = /** @class */ (function () {
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
    function RegisterComponent(authService, socialAuthService) {
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.isLoading = false;
    }
    RegisterComponent.prototype.onregister = function (form) {
        console.log(form.value);
        this.authService.register(form.value.fname, form.value.lname, form.value.email, form.value.password, form.value.DOB, form.value.gender, form.value.nationality);
    };
    RegisterComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        console.log(socialPlatformProvider);
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(userData);
        });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServices, AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map