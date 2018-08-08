import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHistoryComponent } from './pricing-history.component';

describe('PricingHistoryComponent', () => {
  let component: PricingHistoryComponent;
  let fixture: ComponentFixture<PricingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
