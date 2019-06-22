import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { Router } from '@angular/router';
var HotelsCRUDComponent = /** @class */ (function () {
    function HotelsCRUDComponent(hotelService, router) {
        this.hotelService = hotelService;
        this.router = router;
        this.links = [];
        this.displayedColumns = ['image', 'title', 'region', 'rating', 'priceHigh', 'priceLow', 'Delete'];
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
    }
    HotelsCRUDComponent.prototype.navigateTo = function (link) {
        console.log(link);
        this.router.navigate([link]);
    };
    HotelsCRUDComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.links.push({ name: 'Dashboard', link: '/admin', icon: 'book' }, { name: 'Charts', link: 'charts', icon: 'bar_chart' }, { name: 'Statistics', link: 'statistics', icon: 'trending_up' });
                        _a = this;
                        return [4 /*yield*/, this.hotelService.GetAllHotels().subscribe(function (result) {
                                _this.hotels = result;
                                _this.dataSource.data = _this.hotels;
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.hotelsSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HotelsCRUDComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    HotelsCRUDComponent.prototype.ngOnDestroy = function () {
        this.hotelsSubscription.unsubscribe();
    };
    HotelsCRUDComponent.prototype.delete = function (hotel) {
        console.log(hotel);
    };
    HotelsCRUDComponent.prototype.add = function () {
        console.log('hotel');
        this.router.navigate(['admin/database/hotels/addHotel']);
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], HotelsCRUDComponent.prototype, "paginator", void 0);
    HotelsCRUDComponent = tslib_1.__decorate([
        Component({
            selector: 'app-hotels',
            templateUrl: './hotels.component.html',
            styleUrls: ['./hotels.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HotelsService,
            Router])
    ], HotelsCRUDComponent);
    return HotelsCRUDComponent;
}());
export { HotelsCRUDComponent };
//# sourceMappingURL=hotels.component.js.map