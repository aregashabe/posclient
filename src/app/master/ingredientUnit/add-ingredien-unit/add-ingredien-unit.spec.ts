import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredienUnit } from './add-ingredien-unit';

describe('AddIngredienUnit', () => {
  let component: AddIngredienUnit;
  let fixture: ComponentFixture<AddIngredienUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIngredienUnit],
    }).compileComponents();

    fixture = TestBed.createComponent(AddIngredienUnit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
