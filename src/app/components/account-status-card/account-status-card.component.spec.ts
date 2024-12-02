import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryCardComponent } from './account-status-card.component';

describe('AccountSummaryCardComponent', () => {
  let component: AccountSummaryCardComponent;
  let fixture: ComponentFixture<AccountSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
