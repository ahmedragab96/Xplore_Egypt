import { TestBed } from '@angular/core/testing';
import { HotelsService } from './hotels.service';
describe('HotelsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HotelsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=hotels.service.spec.js.map