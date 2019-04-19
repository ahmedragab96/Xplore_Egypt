import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HotelsService } from './../../services/hotels/hotels.service';
import { ActivatedRoute } from '@angular/router';
var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    HotelDetailsComponent.prototype.getHotelDetail = function () {
        var _this = this;
        this.service.getHotelByID(this.id).subscribe(function (res) {
            _this.hotelDetails = res;
            console.log(res);
        });
    };
    HotelDetailsComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.getHotelDetail();
    };
    HotelDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hotel-details',
            templateUrl: './hotel-details.component.html',
            styleUrls: ['./hotel-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HotelsService, ActivatedRoute])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());
export { HotelDetailsComponent };
//# sourceMappingURL=hotel-details.component.js.map