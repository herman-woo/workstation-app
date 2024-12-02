import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEntitiesComponent } from './account-entities.component';

describe('AccountEntitiesComponent', () => {
  let component: AccountEntitiesComponent;
  let fixture: ComponentFixture<AccountEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountEntitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
