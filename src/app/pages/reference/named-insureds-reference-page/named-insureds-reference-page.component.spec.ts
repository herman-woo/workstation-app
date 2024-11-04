import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredsReferencePageComponent } from './named-insureds-reference-page.component';

describe('NamedInsuredsReferencePageComponent', () => {
  let component: NamedInsuredsReferencePageComponent;
  let fixture: ComponentFixture<NamedInsuredsReferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedInsuredsReferencePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInsuredsReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
