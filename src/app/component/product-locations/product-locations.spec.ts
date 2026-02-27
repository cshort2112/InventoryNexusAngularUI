import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLocations } from './product-locations';

describe('ProductLocations', () => {
  let component: ProductLocations;
  let fixture: ComponentFixture<ProductLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLocations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
