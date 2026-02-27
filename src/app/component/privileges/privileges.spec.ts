import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privileges } from './privileges';

describe('Privileges', () => {
  let component: Privileges;
  let fixture: ComponentFixture<Privileges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privileges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privileges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
