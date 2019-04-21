import { TestBed } from '@angular/core/testing';

import { RecommendaionService } from './recommendaion.service';

describe('RecommendaionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendaionService = TestBed.get(RecommendaionService);
    expect(service).toBeTruthy();
  });
});
