import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListSupervisorComponent } from './project-list-supervisor.component';

describe('ProjectListSupervisorComponent', () => {
  let component: ProjectListSupervisorComponent;
  let fixture: ComponentFixture<ProjectListSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
