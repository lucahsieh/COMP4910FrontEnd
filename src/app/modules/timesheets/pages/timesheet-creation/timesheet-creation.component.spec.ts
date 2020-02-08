import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetCreationComponent } from './timesheet-creation.component';

describe('TimesheetCreationComponent', () => {
  let component: TimesheetCreationComponent;
  let fixture: ComponentFixture<TimesheetCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
