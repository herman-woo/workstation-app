import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageCardComponent } from './brokerage-card.component';

describe('BrokerageCardComponent', () => {
  let component: BrokerageCardComponent;
  let fixture: ComponentFixture<BrokerageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
