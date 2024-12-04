import { TestBed } from '@angular/core/testing';

import { Broker1Service } from './broker1.service';

describe('Broker1Service', () => {
  let service: Broker1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Broker1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
