import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTable } from './view-table';

describe('ViewTable', () => {
  let component: ViewTable;
  let fixture: ComponentFixture<ViewTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
