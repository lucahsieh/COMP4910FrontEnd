import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetApproverViewListComponent } from './timesheet-approver-view-list.component';

describe('TimesheetApproverViewListComponent', () => {
  let component: TimesheetApproverViewListComponent;
  let fixture: ComponentFixture<TimesheetApproverViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetApproverViewListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetApproverViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
