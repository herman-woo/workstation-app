import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredCreationFormComponent } from './insured-creation-form.component';

describe('InsuredCreationFormComponent', () => {
  let component: InsuredCreationFormComponent;
  let fixture: ComponentFixture<InsuredCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuredCreationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuredCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
