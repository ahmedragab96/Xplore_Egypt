import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Router } from '@angular/router';
import { RecommendaionService } from './../../services/recommendation/recommendaion.service';
var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(service, router, recservice) {
        this.service = service;
        this.router = router;
        this.recservice = recservice;
        this.recommendedHotels = [];
        this.default = "../../../assets/images/noimage.png";
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
    HotelsComponent.prototype.getRecommended = function () {
        var _this = this;
        this.recservice.getRecommended().subscribe(function (res) {
            _this.recommendedPlaces = res;
            console.log(res);
            for (var i = 0; i < _this.recommendedPlaces.length; i++) {
                if (_this.recommendedPlaces[i].type == "hotel") {
                    console.log(i);
                    _this.recommendedHotels.push(_this.recommendedPlaces[i]);
                }
            }
            console.log(_this.recommendedHotels);
        });
    };
    HotelsComponent.prototype.ngOnInit = function () {
        this.getHotelsFromService();
        this.getRecommended();
    };
    HotelsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hotels',
            templateUrl: './hotels.component.html',
            styleUrls: ['./hotels.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HotelsService, Router,
            RecommendaionService])
    ], HotelsComponent);
    return HotelsComponent;
}());
export { HotelsComponent };
//# sourceMappingURL=hotels.component.js.map