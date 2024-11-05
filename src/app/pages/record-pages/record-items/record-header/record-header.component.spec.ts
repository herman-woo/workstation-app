import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordHeaderComponent } from './record-header.component';

describe('RecordHeaderComponent', () => {
  let component: RecordHeaderComponent;
  let fixture: ComponentFixture<RecordHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
