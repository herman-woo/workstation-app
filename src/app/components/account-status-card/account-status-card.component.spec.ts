import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusCardComponent } from './account-status-card.component';

describe('AccountSummaryCardComponent', () => {
  let component: AccountStatusCardComponent;
  let fixture: ComponentFixture<AccountStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStatusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
