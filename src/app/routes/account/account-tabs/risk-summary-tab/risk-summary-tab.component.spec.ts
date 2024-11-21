import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSummaryTabComponent } from './risk-summary-tab.component';

describe('RiskSummaryComponent', () => {
  let component: RiskSummaryTabComponent;
  let fixture: ComponentFixture<RiskSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskSummaryTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
