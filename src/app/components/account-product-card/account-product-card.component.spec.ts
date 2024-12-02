import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProductCardComponent } from './account-product-card.component';

describe('AccountProductCardComponent', () => {
  let component: AccountProductCardComponent;
  let fixture: ComponentFixture<AccountProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
