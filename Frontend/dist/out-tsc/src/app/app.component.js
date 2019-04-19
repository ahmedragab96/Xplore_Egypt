import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServices } from './components/auth/auth.services';
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServices])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map