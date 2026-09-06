import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrder } from './view-order';

describe('ViewOrder', () => {
  let component: ViewOrder;
  let fixture: ComponentFixture<ViewOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
