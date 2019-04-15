import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(service) {
        this.service = service;
    }
    RestaurantsComponent.prototype.getRestaurantsFromService = function () {
        var _this = this;
        this.service.GetAllRestaurants().subscribe(function (res) {
            _this.restaurants = res;
            console.log(res);
        });
    };
    RestaurantsComponent.prototype.ngOnInit = function () {
        this.getRestaurantsFromService();
    };
    RestaurantsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-restaurants',
            templateUrl: './restaurants.component.html',
            styleUrls: ['./restaurants.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RestaurantsService])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map