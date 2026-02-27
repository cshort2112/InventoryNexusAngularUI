import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPackages } from './shipment-packages';

describe('ShipmentPackages', () => {
  let component: ShipmentPackages;
  let fixture: ComponentFixture<ShipmentPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentPackages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
