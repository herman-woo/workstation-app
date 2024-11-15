import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyModuleCardComponent } from './policy-module-card.component';

describe('PolicyModuleCardComponent', () => {
  let component: PolicyModuleCardComponent;
  let fixture: ComponentFixture<PolicyModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyModuleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
