import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReportViewComponent } from './project-report-view.component';

describe('ProjectReportViewComponent', () => {
  let component: ProjectReportViewComponent;
  let fixture: ComponentFixture<ProjectReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
