import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredTableComponent } from './named-insured-table.component';

describe('NamedInsuredTableComponent', () => {
  let component: NamedInsuredTableComponent;
  let fixture: ComponentFixture<NamedInsuredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedInsuredTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInsuredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
