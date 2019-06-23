import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauantsComponent } from './restauants.component';

describe('RestauantsComponent', () => {
  let component: RestauantsComponent;
  let fixture: ComponentFixture<RestauantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
