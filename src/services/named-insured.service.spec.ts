import { TestBed } from '@angular/core/testing';

import { NamedInsuredService } from './named-insured.service';

describe('NamedInsuredService', () => {
  let service: NamedInsuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamedInsuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
