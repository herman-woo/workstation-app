import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaterOptionsComponent } from './rater-options.component';

describe('RaterOptionsComponent', () => {
  let component: RaterOptionsComponent;
  let fixture: ComponentFixture<RaterOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaterOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
