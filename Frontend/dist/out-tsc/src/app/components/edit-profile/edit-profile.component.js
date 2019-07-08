import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from './../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    EditProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.service.GetUserByID().subscribe(function (res) {
            _this.old_userDetails = res;
        });
    };
    EditProfileComponent.prototype.updateUser = function (user) {
        this.service.updateUser(user);
    };
    EditProfileComponent.prototype.editAvatar = function (event) {
        var file = event.target.files[0];
        this.service.updateAvatar(file);
    };
    EditProfileComponent.prototype.submitForm = function (f) {
        this.updateUser(f.value);
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.getUser();
    };
    EditProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, ActivatedRoute])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
export { EditProfileComponent };
//# sourceMappingURL=edit-profile.component.js.map