import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerRecordComponent } from './broker-record.component';

describe('BrokerComponent', () => {
  let component: BrokerRecordComponent;
  let fixture: ComponentFixture<BrokerRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
