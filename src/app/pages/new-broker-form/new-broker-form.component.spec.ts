import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrokerFormComponent } from './new-broker-form.component';

describe('NewBrokerFormComponent', () => {
  let component: NewBrokerFormComponent;
  let fixture: ComponentFixture<NewBrokerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBrokerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBrokerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
