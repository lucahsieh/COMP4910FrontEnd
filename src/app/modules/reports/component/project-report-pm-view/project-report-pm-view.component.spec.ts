import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReportPmViewComponent } from './project-report-pm-view.component';

describe('ProjectReportPmViewComponent', () => {
  let component: ProjectReportPmViewComponent;
  let fixture: ComponentFixture<ProjectReportPmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReportPmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReportPmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
