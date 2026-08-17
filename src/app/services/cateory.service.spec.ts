import { TestBed } from '@angular/core/testing';

import { CateoryService } from './cateory.service';

describe('CateoryService', () => {
  let service: CateoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
