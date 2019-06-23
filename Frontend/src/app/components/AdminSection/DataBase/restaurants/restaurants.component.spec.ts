import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsCRUDComponent } from './restaurants.component';

describe('RestauantsComponent', () => {
  let component: RestaurantsCRUDComponent;
  let fixture: ComponentFixture<RestaurantsCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
