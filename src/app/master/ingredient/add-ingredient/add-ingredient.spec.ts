import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredient } from './add-ingredient';

describe('AddIngredient', () => {
  let component: AddIngredient;
  let fixture: ComponentFixture<AddIngredient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIngredient],
    }).compileComponents();

    fixture = TestBed.createComponent(AddIngredient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
