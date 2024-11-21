import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceBannerComponent } from './reference-banner.component';

describe('ReferenceBannerComponent', () => {
  let component: ReferenceBannerComponent;
  let fixture: ComponentFixture<ReferenceBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
