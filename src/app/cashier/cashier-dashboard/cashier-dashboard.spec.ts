import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierDashboard } from './cashier-dashboard';

describe('CashierDashboard', () => {
  let component: CashierDashboard;
  let fixture: ComponentFixture<CashierDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(CashierDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
