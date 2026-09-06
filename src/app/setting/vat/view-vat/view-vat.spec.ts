import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVat } from './view-vat';

describe('ViewVat', () => {
  let component: ViewVat;
  let fixture: ComponentFixture<ViewVat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVat],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
