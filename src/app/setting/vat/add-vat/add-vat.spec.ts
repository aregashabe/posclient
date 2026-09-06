import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVat } from './add-vat';

describe('AddVat', () => {
  let component: AddVat;
  let fixture: ComponentFixture<AddVat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVat],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
