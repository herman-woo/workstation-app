import { TestBed } from '@angular/core/testing';

import { PaginatedResponseService } from './paginated-response.service';

describe('PaginatedResponseService', () => {
  let service: PaginatedResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatedResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
