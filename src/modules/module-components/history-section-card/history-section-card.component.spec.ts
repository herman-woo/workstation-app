import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySectionCardComponent } from './history-section-card.component';

describe('HistorySectionCardComponent', () => {
  let component: HistorySectionCardComponent;
  let fixture: ComponentFixture<HistorySectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorySectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
