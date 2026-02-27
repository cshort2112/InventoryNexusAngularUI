import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinLocations } from './bin-locations';

describe('BinLocations', () => {
  let component: BinLocations;
  let fixture: ComponentFixture<BinLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinLocations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
