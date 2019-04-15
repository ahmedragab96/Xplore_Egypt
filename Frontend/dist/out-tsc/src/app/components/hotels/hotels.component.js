import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Router } from '@angular/router';
var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    HotelsComponent.prototype.getHotelsFromService = function () {
        var _this = this;
        this.service.GetAllHotels().subscribe(function (res) {
            _this.hotels = res;
            console.log(res);
        });
    };
    // ViewHotelDetail(id : any){
    //   let url: string = "hotels/" + id
    //        this.router.navigateByUrl(url);
    //     }
    HotelsComponent.prototype.ngOnInit = function () {
        this.getHotelsFromService();
    };
    HotelsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hotels',
            templateUrl: './hotels.component.html',
            styleUrls: ['./hotels.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HotelsService, Router])
    ], HotelsComponent);
    return HotelsComponent;
}());
export { HotelsComponent };
//# sourceMappingURL=hotels.component.js.map