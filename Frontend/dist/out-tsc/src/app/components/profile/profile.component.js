import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from './../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.service.GetUserByID().subscribe(function (res) {
            _this.userDetails = res;
            console.log(res);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.getUser();
        console.log(this.userDetails);
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, ActivatedRoute])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map