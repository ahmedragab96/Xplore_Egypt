import { TestBed } from '@angular/core/testing';
import { TripPlannerService } from './trip-planner.service';
describe('TripPlannerService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TripPlannerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=trip-planner.service.spec.js.map