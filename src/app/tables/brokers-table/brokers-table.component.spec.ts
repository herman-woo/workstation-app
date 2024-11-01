import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersTableComponent } from './brokers-table.component';

describe('BrokersTableComponent', () => {
  let component: BrokersTableComponent;
  let fixture: ComponentFixture<BrokersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
