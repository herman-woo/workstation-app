import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterListComponent } from './underwriter-list.component';

describe('UnderwriterReferencePagesComponent', () => {
  let component: UnderwriterListComponent;
  let fixture: ComponentFixture<UnderwriterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
