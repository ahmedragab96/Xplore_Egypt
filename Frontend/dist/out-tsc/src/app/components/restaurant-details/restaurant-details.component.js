import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RestaurantsService } from './../../services/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
var RestaurantDetailsComponent = /** @class */ (function () {
    function RestaurantDetailsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    RestaurantDetailsComponent.prototype.getRestaurantDetail = function () {
        var _this = this;
        this.service.getRestaurantByID(this.id).subscribe(function (res) {
            _this.restaurantDetails = res;
            console.log(res);
        });
    };
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.getRestaurantDetail();
    };
    RestaurantDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-restaurant-details',
            templateUrl: './restaurant-details.component.html',
            styleUrls: ['./restaurant-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RestaurantsService, ActivatedRoute])
    ], RestaurantDetailsComponent);
    return RestaurantDetailsComponent;
}());
export { RestaurantDetailsComponent };
//# sourceMappingURL=restaurant-details.component.js.map