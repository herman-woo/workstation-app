import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsSectionCardComponent } from './assignments-section-card.component';

describe('AssignmentsSectionCardComponent', () => {
  let component: AssignmentsSectionCardComponent;
  let fixture: ComponentFixture<AssignmentsSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentsSectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentsSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
