import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
var RecommendaionService = /** @class */ (function () {
    function RecommendaionService(http) {
        this.http = http;
    }
    RecommendaionService.prototype.decodeToken = function () {
        var token = localStorage.getItem('token');
        var payload = jwt_decode(token);
        console.log(payload);
        var userId = payload.userId;
        return userId;
    };
    RecommendaionService.prototype.getRecommended = function () {
        var id = this.decodeToken();
        return this.http.get("http://localhost:3000/recommend?id=" + id);
    };
    RecommendaionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RecommendaionService);
    return RecommendaionService;
}());
export { RecommendaionService };
//# sourceMappingURL=recommendaion.service.js.map