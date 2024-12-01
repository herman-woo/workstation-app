import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterCardComponent } from './underwriter-card.component';

describe('UnderwriterCardComponent', () => {
  let component: UnderwriterCardComponent;
  let fixture: ComponentFixture<UnderwriterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
