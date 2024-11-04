import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferenceBannerComponent } from '../reference-banner/reference-banner.component';
import { BrokerAgentsReferencePageComponent } from './broker-agents-reference-page.component';

describe('BrokerAgentsReferencePageComponent', () => {
  let component: BrokerAgentsReferencePageComponent;
  let fixture: ComponentFixture<BrokerAgentsReferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerAgentsReferencePageComponent, ReferenceBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerAgentsReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
