import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthServices } from './auth.services';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authServices) {
        this.authServices = authServices;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authServices.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthServices])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth-interceptor.js.map