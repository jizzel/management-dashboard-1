import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityPricingComponent } from './commodity-pricing.component';

describe('CommodityPricingComponent', () => {
  let component: CommodityPricingComponent;
  let fixture: ComponentFixture<CommodityPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
