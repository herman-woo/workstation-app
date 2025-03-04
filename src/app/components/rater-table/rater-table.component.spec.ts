import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaterTableComponent } from './rater-table.component';

describe('RaterTableComponent', () => {
  let component: RaterTableComponent;
  let fixture: ComponentFixture<RaterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaterTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
