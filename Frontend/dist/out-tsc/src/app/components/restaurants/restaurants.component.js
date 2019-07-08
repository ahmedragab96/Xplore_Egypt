import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants/restaurants.service';
import { RecommendaionService } from './../../services/recommendation/recommendaion.service';
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(service, recservice) {
        this.service = service;
        this.recservice = recservice;
        this.recommendedRestaurants = [];
        this.default = "../../../assets/images/noimage.png";
    }
    RestaurantsComponent.prototype.getRestaurantsFromService = function () {
        var _this = this;
        this.service.GetAllRestaurants().subscribe(function (res) {
            _this.restaurants = res;
        });
    };
    RestaurantsComponent.prototype.getRecommended = function () {
        var _this = this;
        this.recservice.getRecommended().subscribe(function (res) {
            _this.recommendedPlaces = res;
            for (var i = 0; i < _this.recommendedPlaces.length; i++) {
                if (_this.recommendedPlaces[i].type == "Restaurant") {
                    _this.recommendedRestaurants.push(_this.recommendedPlaces[i]);
                }
            }
        });
    };
    RestaurantsComponent.prototype.ngOnInit = function () {
        this.getRestaurantsFromService();
        this.getRecommended();
    };
    RestaurantsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-restaurants',
            templateUrl: './restaurants.component.html',
            styleUrls: ['./restaurants.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RestaurantsService,
            RecommendaionService])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map