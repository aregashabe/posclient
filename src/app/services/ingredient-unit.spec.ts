import { TestBed } from '@angular/core/testing';

import { IngredientUnit } from './ingredient-unit';

describe('IngredientUnit', () => {
  let service: IngredientUnit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientUnit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
