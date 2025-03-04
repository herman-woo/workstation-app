import { TestBed } from '@angular/core/testing';

import { RaterReferencesService } from './rater-references.service';

describe('RaterReferencesService', () => {
  let service: RaterReferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaterReferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
