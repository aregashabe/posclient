import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSidebar } from './cashier-sidebar';

describe('CashierSidebar', () => {
  let component: CashierSidebar;
  let fixture: ComponentFixture<CashierSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(CashierSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
