import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecommendaionService } from './../../services/recommendation/recommendaion.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(recservice) {
        this.recservice = recservice;
    }
    HomeComponent.prototype.getRecommended = function () {
        var _this = this;
        this.recservice.getRecommended().subscribe(function (res) {
            _this.recommendedPlaces = res;
            console.log(res);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getRecommended();
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [RecommendaionService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map