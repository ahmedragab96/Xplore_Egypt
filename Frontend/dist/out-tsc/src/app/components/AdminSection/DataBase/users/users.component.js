import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/users/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.links = [];
        this.displayedColumns = ['FirstName', 'LastName', 'Email', 'gender', 'Nationality'];
        this.dataSource = new MatTableDataSource();
    }
    UsersComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.links.push({ name: 'Dashboard', link: '/admin', icon: 'book' }, { name: 'Charts', link: 'charts', icon: 'bar_chart' }, { name: 'Statistics', link: 'statistics', icon: 'trending_up' });
                        _a = this;
                        return [4 /*yield*/, this.userService.GetAllUsers().subscribe(function (result) {
                                _this.users = result.results;
                                _this.dataSource.data = _this.users;
                            })];
                    case 1:
                        _a.usersSubscription = _b.sent();
                        this.dataSource.paginator = this.paginator;
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.navigateTo = function (link) {
        console.log(link);
        this.router.navigate([link]);
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.usersSubscription.unsubscribe();
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            Router])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map