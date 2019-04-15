import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";
var TripPlannerService = /** @class */ (function () {
    function TripPlannerService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    TripPlannerService.prototype.GetAllTrips = function () {
        return this.http.get("http://localhost:3000/trips/getall");
    };
    TripPlannerService.prototype.decodeToken = function () {
        var token = localStorage.getItem("token");
        var payload = jwt_decode(token);
        console.log(payload);
        var userId = payload.userId;
        return userId;
    };
    // Trip Planner section 
    TripPlannerService.prototype.savePlannedTrips = function (trips) {
        var body = {};
        body["id"] = this.decodeToken();
        body["plan"] = trips;
        console.log(body);
        return this.http.post("http://localhost:3000/users/addplan", body).subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) { console.log("Error", error); });
    };
    TripPlannerService.prototype.loadPlannedTrips = function () {
        var id = this.decodeToken();
        return this.http.get("http://localhost:3000/users/getplan?id=" + id);
    };
    // trips section 
    TripPlannerService.prototype.getTripByID = function (id) {
        // return this.http.get("http://localhost:3000/trips/getById?t.itemid="+id);
        return this.http.get("http://localhost:3000/trips/getById?id=" + id);
    };
    TripPlannerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ActivatedRoute, Router])
    ], TripPlannerService);
    return TripPlannerService;
}());
export { TripPlannerService };
//# sourceMappingURL=trip-planner.service.js.map