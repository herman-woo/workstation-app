import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingQuotingTabComponent } from './rating-quoting-tab.component';

describe('RatingQuotingComponent', () => {
  let component: RatingQuotingTabComponent;
  let fixture: ComponentFixture<RatingQuotingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingQuotingTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingQuotingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
