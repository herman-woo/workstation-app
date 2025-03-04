import { TestBed } from '@angular/core/testing';

import { RaterService } from './rater.service';

describe('RaterService', () => {
  let service: RaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
