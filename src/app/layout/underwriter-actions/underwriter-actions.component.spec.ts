import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterActionsComponent } from './underwriter-actions.component';

describe('UnderwriterActionsComponent', () => {
  let component: UnderwriterActionsComponent;
  let fixture: ComponentFixture<UnderwriterActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
