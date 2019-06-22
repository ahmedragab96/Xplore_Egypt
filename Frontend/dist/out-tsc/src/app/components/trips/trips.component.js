import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TripPlannerService } from '../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router';
import { RecommendaionService } from './../../services/recommendation/recommendaion.service';
var TripsComponent = /** @class */ (function () {
    function TripsComponent(service, router, recservice) {
        this.service = service;
        this.router = router;
        this.recservice = recservice;
        this.recommendedTrips = [];
        this.p = 1;
        this.default = "../../../assets/images/noimage.png";
    }
    TripsComponent.prototype.getTripsFromService = function () {
        var _this = this;
        this.service.GetAllTrips().subscribe(function (res) {
            _this.trips = res;
            console.log(res);
        });
    };
    TripsComponent.prototype.getRecommended = function () {
        var _this = this;
        this.recservice.getRecommended().subscribe(function (res) {
            _this.recommendedPlaces = res;
            console.log(res);
            for (var i = 0; i < _this.recommendedPlaces.length; i++) {
                if (_this.recommendedPlaces[i].type == "trip") {
                    console.log(i);
                    _this.recommendedTrips.push(_this.recommendedPlaces[i]);
                }
            }
            console.log(_this.recommendedTrips);
        });
    };
    TripsComponent.prototype.ViewTripDetail = function (id) {
        var url = "trips/" + id;
        this.router.navigateByUrl(url);
    };
    TripsComponent.prototype.ngOnInit = function () {
        this.getTripsFromService();
        this.getRecommended();
    };
    TripsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.component.html',
            styleUrls: ['./trips.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TripPlannerService, Router,
            RecommendaionService])
    ], TripsComponent);
    return TripsComponent;
}());
export { TripsComponent };
//# sourceMappingURL=trips.component.js.map