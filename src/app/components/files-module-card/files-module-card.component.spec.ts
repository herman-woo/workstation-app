import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesModuleCardComponent } from './files-module-card.component';

describe('FilesModuleCardComponent', () => {
  let component: FilesModuleCardComponent;
  let fixture: ComponentFixture<FilesModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilesModuleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
