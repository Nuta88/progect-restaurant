import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDishPriceComponent } from './edit-dish-price.component';

describe('EditDishPriceComponent', () => {
  let component: EditDishPriceComponent;
  let fixture: ComponentFixture<EditDishPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDishPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDishPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
