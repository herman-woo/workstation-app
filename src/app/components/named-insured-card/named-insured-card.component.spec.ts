import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredCardComponent } from './named-insured-card.component';

describe('NamedInsuredCardComponent', () => {
  let component: NamedInsuredCardComponent;
  let fixture: ComponentFixture<NamedInsuredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedInsuredCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInsuredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
