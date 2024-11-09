import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterReferencePagesComponent } from './underwriter-reference-pages.component';

describe('UnderwriterReferencePagesComponent', () => {
  let component: UnderwriterReferencePagesComponent;
  let fixture: ComponentFixture<UnderwriterReferencePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderwriterReferencePagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwriterReferencePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
