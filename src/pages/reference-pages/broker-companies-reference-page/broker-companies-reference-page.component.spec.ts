import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerCompaniesReferencePageComponent } from './broker-companies-reference-page.component';

describe('BrokerCompaniesReferencePageComponent', () => {
  let component: BrokerCompaniesReferencePageComponent;
  let fixture: ComponentFixture<BrokerCompaniesReferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerCompaniesReferencePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerCompaniesReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
