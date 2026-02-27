import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItems } from './orders-items';

describe('OrdersItems', () => {
  let component: OrdersItems;
  let fixture: ComponentFixture<OrdersItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
