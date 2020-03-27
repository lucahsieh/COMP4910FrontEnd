import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewSupervisorComponent } from './project-view-supervisor.component';

describe('ProjectViewSupervisorComponent', () => {
  let component: ProjectViewSupervisorComponent;
  let fixture: ComponentFixture<ProjectViewSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectViewSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
