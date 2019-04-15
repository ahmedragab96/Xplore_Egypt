import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServices } from '../auth/auth.services';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getisAuth();
        this.authlistenerSubs = this.authService
            .getauthStatusListener().subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    NavbarComponent.prototype.onlogout = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.authlistenerSubs.unsubscribe();
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServices])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map