import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSectionCardComponent } from './comments-section-card.component';

describe('CommentsSectionCardComponent', () => {
  let component: CommentsSectionCardComponent;
  let fixture: ComponentFixture<CommentsSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsSectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
