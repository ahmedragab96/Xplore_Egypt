import { TestBed } from '@angular/core/testing';
import { ReviewsService } from './reviews.service';
describe('ReviewsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ReviewsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=reviews.service.spec.js.map