import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBreadcrumbComponent } from './account-breadcrumb.component';

describe('AccountBreadcrumbComponent', () => {
  let component: AccountBreadcrumbComponent;
  let fixture: ComponentFixture<AccountBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
