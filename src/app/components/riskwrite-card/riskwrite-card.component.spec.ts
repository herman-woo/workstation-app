import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskwriteCardComponent } from './riskwrite-card.component';

describe('RiskwriteCardComponent', () => {
  let component: RiskwriteCardComponent;
  let fixture: ComponentFixture<RiskwriteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskwriteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskwriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
