import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerCompaniesListComponent } from './broker-companies-list.component';

describe('BrokerCompaniesReferencePageComponent', () => {
  let component: BrokerCompaniesListComponent;
  let fixture: ComponentFixture<BrokerCompaniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerCompaniesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
