import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.GetAllRestaurants = function () {
        return this.http.get('http://localhost:3000/restaurants/getall');
    };
    RestaurantsService.prototype.getRestaurantByID = function (id) {
        return this.http.get('http://localhost:3000/restaurants/getById?id=' + id);
    };
    RestaurantsService.prototype.addRestaurant = function (restDetails) {
        return this.http.post('http://localhost:3000/restaurants/addrestaurant', restDetails).subscribe(function (data) {
            console.log('Restaurant has been added successfully ', data);
        }, function (error) { console.log('Error', error); });
    };
    RestaurantsService.prototype.deleteRestaurant = function (id) {
        return this.http.delete("http://localhost:3000/restaurants/delete/:id=" + id);
    };
    RestaurantsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RestaurantsService);
    return RestaurantsService;
}());
export { RestaurantsService };
//# sourceMappingURL=restaurants.service.js.map