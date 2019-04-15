import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServices } from '../auth.services';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onlogin = function (form) {
        console.log(form.value);
        this.authService.login(form.value.username, form.value.pass);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServices])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map