import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditingChecklistComponent } from './auditing-checklist.component';

describe('AuditingChecklistComponent', () => {
  let component: AuditingChecklistComponent;
  let fixture: ComponentFixture<AuditingChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditingChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditingChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
