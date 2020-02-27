import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetViewComponent } from './timesheet-view.component';

describe('TimesheetViewComponent', () => {
  let component: TimesheetViewComponent;
  let fixture: ComponentFixture<TimesheetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
