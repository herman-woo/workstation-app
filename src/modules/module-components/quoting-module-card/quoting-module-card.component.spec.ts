import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotingModuleCardComponent } from './quoting-module-card.component';

describe('QuotingModuleCardComponent', () => {
  let component: QuotingModuleCardComponent;
  let fixture: ComponentFixture<QuotingModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotingModuleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotingModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
