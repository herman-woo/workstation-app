import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaterSummaryComponent } from './rater-summary.component';

describe('RaterSummaryComponent', () => {
  let component: RaterSummaryComponent;
  let fixture: ComponentFixture<RaterSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaterSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaterSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
