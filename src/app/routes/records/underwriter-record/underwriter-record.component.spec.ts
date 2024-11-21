import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterRecordComponent } from './underwriter-record.component';

describe('UnderwriterComponent', () => {
  let component: UnderwriterRecordComponent;
  let fixture: ComponentFixture<UnderwriterRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
