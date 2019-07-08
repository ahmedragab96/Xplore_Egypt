import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ReviewsService } from './../../services/reviews/reviews.service';
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(reviewsService) {
        this.reviewsService = reviewsService;
    }
    ReviewComponent.prototype.review = function (ReviewForm) {
        this.reviewsService.PostAReview(this.placeid, ReviewForm.value);
    };
    ReviewComponent.prototype.getReviews = function () {
        var _this = this;
        this.reviewsService.getReviewforPlace(this.placeid).subscribe(function (res) {
            _this.reviews = res;
        });
    };
    ReviewComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ReviewComponent.prototype, "placeid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ReviewComponent.prototype, "currentRate", void 0);
    ReviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-review',
            templateUrl: './review.component.html',
            styleUrls: ['./review.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReviewsService])
    ], ReviewComponent);
    return ReviewComponent;
}());
export { ReviewComponent };
//# sourceMappingURL=review.component.js.map