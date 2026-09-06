import { TestBed } from '@angular/core/testing';

import { Ingredient } from './ingredient';

describe('Ingredient', () => {
  let service: Ingredient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ingredient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
