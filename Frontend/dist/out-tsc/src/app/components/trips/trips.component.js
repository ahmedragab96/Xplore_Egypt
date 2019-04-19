import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TripPlannerService } from '../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router';
var TripsComponent = /** @class */ (function () {
    function TripsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.p = 1;
    }
    TripsComponent.prototype.getTripsFromService = function () {
        var _this = this;
        this.service.GetAllTrips().subscribe(function (res) {
            _this.trips = res;
            console.log(res);
        });
    };
    TripsComponent.prototype.ViewTripDetail = function (id) {
        var url = "trips/" + id;
        this.router.navigateByUrl(url);
    };
    TripsComponent.prototype.ngOnInit = function () {
        this.getTripsFromService();
    };
    TripsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.component.html',
            styleUrls: ['./trips.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TripPlannerService, Router])
    ], TripsComponent);
    return TripsComponent;
}());
export { TripsComponent };
//# sourceMappingURL=trips.component.js.map