import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngredient } from './view-ingredient';

describe('ViewIngredient', () => {
  let component: ViewIngredient;
  let fixture: ComponentFixture<ViewIngredient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewIngredient],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIngredient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
