import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordBreadcrumbComponent } from './record-breadcrumb.component';

describe('RecordBreadcrumbComponent', () => {
  let component: RecordBreadcrumbComponent;
  let fixture: ComponentFixture<RecordBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
