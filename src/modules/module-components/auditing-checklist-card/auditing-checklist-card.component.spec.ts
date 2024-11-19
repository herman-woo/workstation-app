import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditingChecklistCardComponent } from './auditing-checklist-card.component';

describe('AuditingChecklistCardComponent', () => {
  let component: AuditingChecklistCardComponent;
  let fixture: ComponentFixture<AuditingChecklistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditingChecklistCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditingChecklistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
