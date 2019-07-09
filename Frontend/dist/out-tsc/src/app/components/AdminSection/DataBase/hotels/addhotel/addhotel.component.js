import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HotelsService } from '../../../../../services/hotels/hotels.service';
import { Router } from '@angular/router';
var AddhotelComponent = /** @class */ (function () {
    function AddhotelComponent(hotelService, router) {
        this.hotelService = hotelService;
        this.router = router;
    }
    AddhotelComponent.prototype.ngOnInit = function () {
    };
    AddhotelComponent.prototype.onSubmit = function (form) {

        this.hotelService.addHotel(form.value);
        this.router.navigate(['admin/database/hotels']);
    };
    AddhotelComponent = tslib_1.__decorate([
        Component({
            selector: 'app-addhotel',
            templateUrl: './addhotel.component.html',
            styleUrls: ['./addhotel.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HotelsService,
            Router])
    ], AddhotelComponent);
    return AddhotelComponent;
}());
export { AddhotelComponent };
//# sourceMappingURL=addhotel.component.js.map