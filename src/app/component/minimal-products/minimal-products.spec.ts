import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalProducts } from './minimal-products';

describe('MinimalProducts', () => {
  let component: MinimalProducts;
  let fixture: ComponentFixture<MinimalProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
