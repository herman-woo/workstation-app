import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredRecordComponent } from './named-insured-record.component';

describe('NamedInsuredComponent', () => {
  let component: NamedInsuredRecordComponent;
  let fixture: ComponentFixture<NamedInsuredRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedInsuredRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInsuredRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
