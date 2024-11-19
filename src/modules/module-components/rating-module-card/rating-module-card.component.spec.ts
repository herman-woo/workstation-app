import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingModuleCardComponent } from './rating-module-card.component';

describe('RatingModuleCardComponent', () => {
  let component: RatingModuleCardComponent;
  let fixture: ComponentFixture<RatingModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingModuleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
