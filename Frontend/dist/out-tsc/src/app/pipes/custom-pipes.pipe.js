import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term, args) {
        var len = args.length;
        if (len < 10) {
            for (var i = len; i < 10; i++) {
                args[i] = args[0];
            }
        }
        if (term) {
            term = term.toLowerCase();
            return items.filter(function (item) { return (item[args[0]].toLowerCase().indexOf(term) !== -1 ||
                item[args[1]].toLowerCase().indexOf(term) !== -1 ||
                item[args[2]].toLowerCase().indexOf(term) !== -1 ||
                item[args[3]].toLowerCase().indexOf(term) !== -1 ||
                item[args[4]].toLowerCase().indexOf(term) !== -1 ||
                item[args[5]].toLowerCase().indexOf(term) !== -1 ||
                item[args[6]].toLowerCase().indexOf(term) !== -1 ||
                item[args[7]].toLowerCase().indexOf(term) !== -1 ||
                item[args[8]].toLowerCase().indexOf(term) !== -1 ||
                item[args[9]].toLowerCase().indexOf(term) !== -1); });
        }
        else {
            return items;
        }
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({ name: 'filter', pure: false })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
var RemoveFilterPipe = /** @class */ (function () {
    function RemoveFilterPipe() {
    }
    RemoveFilterPipe.prototype.transform = function (items, args) {
        return items.filter(function (item) { return (item[args] !== ''); });
    };
    RemoveFilterPipe = tslib_1.__decorate([
        Pipe({ name: 'Rfilter', pure: false })
    ], RemoveFilterPipe);
    return RemoveFilterPipe;
}());
export { RemoveFilterPipe };
//# sourceMappingURL=custom-pipes.pipe.js.map