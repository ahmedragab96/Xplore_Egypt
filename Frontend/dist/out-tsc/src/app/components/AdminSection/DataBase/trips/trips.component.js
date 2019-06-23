import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TripPlannerService } from '../../../../services/trip-planner/trip-planner.service';
import { Router } from '@angular/router';
var TripsCRUDComponent = /** @class */ (function () {
    function TripsCRUDComponent(tripsService, router) {
        this.tripsService = tripsService;
        this.router = router;
        this.links = [];
        this.displayedColumns = ['image', 'includes', 'experience', 'price', 'duration', 'Delete'];
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
    }
    TripsCRUDComponent.prototype.navigateTo = function (link) {
        console.log(link);
        this.router.navigate([link]);
    };
    TripsCRUDComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.links.push({ name: 'Dashboard', link: '/admin', icon: 'book' }, { name: 'Charts', link: 'charts', icon: 'bar_chart' }, { name: 'Statistics', link: 'statistics', icon: 'trending_up' });
                        _a = this;
                        return [4 /*yield*/, this.tripsService.GetAllTrips().subscribe(function (result) {
                                _this.trips = result;
                                _this.dataSource.data = _this.trips;
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.tripsSubscription = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TripsCRUDComponent.prototype.add = function () {
        console.log('trips');
        this.router.navigate(['admin/database/trips/addTrip']);
    };
    TripsCRUDComponent.prototype.delete = function (trip) {
        console.log(trip);
    };
    TripsCRUDComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    TripsCRUDComponent.prototype.ngOnDestroy = function () {
        this.tripsSubscription.unsubscribe();
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], TripsCRUDComponent.prototype, "paginator", void 0);
    TripsCRUDComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.component.html',
            styleUrls: ['./trips.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TripPlannerService,
            Router])
    ], TripsCRUDComponent);
    return TripsCRUDComponent;
}());
export { TripsCRUDComponent };
//# sourceMappingURL=trips.component.js.map