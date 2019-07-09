import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
var ReviewsService = /** @class */ (function () {
    function ReviewsService(http) {
        this.http = http;
    }
    ReviewsService.prototype.decodeToken = function () {
        var token = localStorage.getItem('token');
        var payload = jwt_decode(token);
        console.log(payload);
        var userId = payload.userId;
        return userId;
    };
    ReviewsService.prototype.PostAReview = function (placeid, body) {
        var userid = this.decodeToken();
        return this.http.post("http://localhost:3000/reviews/add/" + userid + "/" + placeid, body).subscribe(function (data) {
            console.log('POST Request is successful ', data);
        }, function (error) { console.log('Error', error); });
    };
    ReviewsService.prototype.getReviewforPlace = function (placeID) {
        return this.http.get('http://localhost:3000/reviews//getPlaceReviews/' + placeID);
    };
    ReviewsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ReviewsService);
    return ReviewsService;
}());
export { ReviewsService };
//# sourceMappingURL=reviews.service.js.map