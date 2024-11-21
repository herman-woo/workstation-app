import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingQuotingComponent } from './rating-quoting.component';

describe('RatingQuotingComponent', () => {
  let component: RatingQuotingComponent;
  let fixture: ComponentFixture<RatingQuotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingQuotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingQuotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
