import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngredienUnit } from './view-ingredien-unit';

describe('ViewIngredienUnit', () => {
  let component: ViewIngredienUnit;
  let fixture: ComponentFixture<ViewIngredienUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewIngredienUnit],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIngredienUnit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
