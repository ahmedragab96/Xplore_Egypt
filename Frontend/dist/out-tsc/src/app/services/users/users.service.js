import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.decodeToken = function () {
        var token = localStorage.getItem('token');
        var payload = jwt_decode(token);
        console.log(payload);
        var userId = payload.userId;
        return userId;
    };
    UserService.prototype.GetAllUsers = function () {
        return this.http.get('http://localhost:3000/users/getall');
    };
    UserService.prototype.GetUserByID = function () {
        var id = this.decodeToken();
        return this.http.get('http://localhost:3000/users/getData?id=' + id);
    };
    UserService.prototype.updateUser = function (body) {
        var id = this.decodeToken();
        return this.http.post('http://localhost:3000/users/edit/' + id + "/", body).subscribe(function (data) {
            console.log('User Updated successfully ', data);
        }, function (error) { console.log('Error', error); });
    };
    UserService.prototype.updateAvatar = function (image) {
        var id = this.decodeToken();
        var formData = new FormData();
        formData.append('avatar', image);
        return this.http.put('http://localhost:3000/users/editavatar/' + id + "/", formData).subscribe(function (data) {
            console.log('avatar Updated successfully ', data);
        }, function (error) { console.log('Error', error); });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=users.service.js.map