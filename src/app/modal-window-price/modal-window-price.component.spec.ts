import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowPriceComponent } from './modal-window-price.component';

describe('ModalWindowPriceComponent', () => {
  let component: ModalWindowPriceComponent;
  let fixture: ComponentFixture<ModalWindowPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
