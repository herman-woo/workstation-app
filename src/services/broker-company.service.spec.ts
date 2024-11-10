import { TestBed } from '@angular/core/testing';

import { BrokerCompanyService } from '../app/broker-company.service';

describe('BrokerCompanyService', () => {
  let service: BrokerCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrokerCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
