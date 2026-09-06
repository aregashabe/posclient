import { TestBed } from '@angular/core/testing';

import { PosOrderService } from './pos-order.service';

describe('PosOrderService', () => {
  let service: PosOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
