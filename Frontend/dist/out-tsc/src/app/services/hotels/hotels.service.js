import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HotelsService = /** @class */ (function () {
    function HotelsService(http) {
        this.http = http;
    }
    HotelsService.prototype.GetAllHotels = function () {
        return this.http.get("http://localhost:3000/hotels/getall");
    };
    HotelsService.prototype.getHotelByID = function (id) {
        return this.http.get("http://localhost:3000/hotels/getById?id=" + id);
    };
    HotelsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HotelsService);
    return HotelsService;
}());
export { HotelsService };
//# sourceMappingURL=hotels.service.js.map