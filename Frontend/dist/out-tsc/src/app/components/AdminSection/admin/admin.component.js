import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.links = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.links.push({ name: 'Dashboard', link: '/admin', icon: 'book' }, { name: 'Charts', link: '/admin/charts', icon: 'bar_chart' }, { name: 'Statistics', link: 'statistics', icon: 'trending_up' });
    };
    AdminComponent.prototype.navigateTo = function (link) {
        console.log(link);
        this.router.navigate([link]);
    };
    AdminComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map