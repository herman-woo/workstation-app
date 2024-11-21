import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferenceBannerComponent } from '../../../content/reference-pages/reference-page-items/reference-banner/reference-banner.component';
import { BrokerListComponent } from './broker-list.component';

describe('BrokerAgentsReferencePageComponent', () => {
  let component: BrokerListComponent;
  let fixture: ComponentFixture<BrokerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerListComponent, ReferenceBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
