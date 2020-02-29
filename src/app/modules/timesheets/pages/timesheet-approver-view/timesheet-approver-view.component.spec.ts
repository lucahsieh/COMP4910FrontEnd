import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetApproverViewComponent } from './timesheet-approver-view.component';

describe('TimesheetApproverViewComponent', () => {
  let component: TimesheetApproverViewComponent;
  let fixture: ComponentFixture<TimesheetApproverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetApproverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetApproverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
