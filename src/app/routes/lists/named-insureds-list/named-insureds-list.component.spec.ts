import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInsuredsListComponent } from './named-insureds-list.component';

describe('NamedInsuredsReferencePageComponent', () => {
  let component: NamedInsuredsListComponent;
  let fixture: ComponentFixture<NamedInsuredsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedInsuredsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInsuredsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
