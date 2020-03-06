import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReportListComponent } from './project-report-list.component';

describe('ProjectReportListComponent', () => {
  let component: ProjectReportListComponent;
  let fixture: ComponentFixture<ProjectReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectReportListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
