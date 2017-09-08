import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFooterComponent } from './restaurant-footer.component';

describe('RestaurantFooterComponent', () => {
  let component: RestaurantFooterComponent;
  let fixture: ComponentFixture<RestaurantFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
