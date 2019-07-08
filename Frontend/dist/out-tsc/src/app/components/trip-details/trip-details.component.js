import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TripPlannerService } from './../../services/trip-planner/trip-planner.service';
import { ActivatedRoute } from '@angular/router';
var TripDetailsComponent = /** @class */ (function () {
    function TripDetailsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    TripDetailsComponent.prototype.getTripDetail = function () {
        var _this = this;
        this.service.getTripByID(this.id).subscribe(function (res) {
            _this.tripDetails = res;
        });
    };
    TripDetailsComponent.prototype.ngOnInit = function () {
        // this.id =parseInt(this.router.snapshot.paramMap.get('trip_id'))
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.getTripDetail();
    };
    TripDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trip-details',
            templateUrl: './trip-details.component.html',
            styleUrls: ['./trip-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TripPlannerService, ActivatedRoute])
    ], TripDetailsComponent);
    return TripDetailsComponent;
}());
export { TripDetailsComponent };
//# sourceMappingURL=trip-details.component.js.map