import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServices } from '../auth.services';
import { NotifierService } from 'angular-notifier';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(notifier, authService) {
        this.notifier = notifier;
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onlogin = function (form) {
        var _this = this;
        this.notifier.notify('success', 'you logged in');
        console.log(form.value);
        this.authService.login(form.value.username, form.value.pass).subscribe(function (response) {
            _this.notifier.notify('success', 'you logged in');
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NotifierService, AuthServices])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map