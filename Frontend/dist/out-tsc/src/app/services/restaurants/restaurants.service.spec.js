import { TestBed } from '@angular/core/testing';
import { RestaurantsService } from './restaurants.service';
describe('RestaurantsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RestaurantsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=restaurants.service.spec.js.map