import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTimelineCardComponent } from './account-timeline-card.component';

describe('AccountTimelineCardComponent', () => {
  let component: AccountTimelineCardComponent;
  let fixture: ComponentFixture<AccountTimelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTimelineCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
