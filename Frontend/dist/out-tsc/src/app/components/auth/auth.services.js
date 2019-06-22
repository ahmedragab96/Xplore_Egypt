import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
var AuthServices = /** @class */ (function () {
    function AuthServices(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth = false;
        this.authStatusListener = new Subject();
    }
    AuthServices.prototype.getToken = function () {
        return this.private_token;
    };
    AuthServices.prototype.getisAuth = function () {
        return this.isAuth;
    };
    AuthServices.prototype.getauthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthServices.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting timer: ' + duration);
        this.Timer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthServices.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post('http://localhost:3000/users/login', authData)
            .subscribe(function (Response) {
            if (Response.token) {
                var expiration = Response.expireIn;
                _this.setAuthTimer(expiration);
                var token = Response.token;
                _this.private_token = token;
                _this.isAuth = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDte = new Date(now.getTime() + (expiration * 1000));
                _this.saveAuthData(token, expirationDte);
                _this.router.navigate(['/home']);
            }
            else {
                console.log(Response.error);
            }
        });
        return this.http.post('http://localhost:3000/users/login', authData);
    };
    AuthServices.prototype.register = function (fname, lname, email, password, 
    /*image: File ,*/ DOB, gender, nationality) {
        console.log("in auth");
        var userData = new FormData();
        userData.append('fname', fname);
        userData.append('lname', lname);
        userData.append('email', email);
        userData.append('password', password);
        userData.append('DOB', DOB);
        //userData.append('image', image , fname);
        userData.append('gender', gender);
        userData.append('nationality', nationality);
        // const userData: UserData = {fname: fname , lname: lname ,
        //                             email: email , password: password ,
        //                             DOB: DOB , image: image , gender: gender , : nationality};
        return this.http.post('http://localhost:3000/users/register', userData);
    };
    AuthServices.prototype.socialSignUp = function (body) {
        // console.log(body)
        // calling the post function
        return this.http.post('http://localhost:3000/users/socialSignUp', body);
    };
    AuthServices.prototype.logout = function () {
        this.private_token = null;
        this.authStatusListener.next(false);
        this.isAuth = false;
        clearTimeout(this.Timer);
        this.clearAuthData();
        this.router.navigate(['/login']);
    };
    AuthServices.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    };
    AuthServices.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    };
    AuthServices.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthServices.prototype.autoAuthUser = function () {
        var Authinfo = this.getAuthData();
        if (!Authinfo) {
            return;
        }
        var now = new Date();
        var expiresIn = Authinfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.private_token = Authinfo.token;
            this.isAuth = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthServices = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthServices);
    return AuthServices;
}());
export { AuthServices };
//# sourceMappingURL=auth.services.js.map