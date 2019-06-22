import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AddtripComponent = /** @class */ (function () {
    function AddtripComponent() {
    }
    AddtripComponent.prototype.ngOnInit = function () {
    };
    AddtripComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
    };
    AddtripComponent = tslib_1.__decorate([
        Component({
            selector: 'app-addtrip',
            templateUrl: './addtrip.component.html',
            styleUrls: ['./addtrip.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddtripComponent);
    return AddtripComponent;
}());
export { AddtripComponent };
//# sourceMappingURL=addtrip.component.js.map