import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEditVersionComponent } from './timesheet-edit-version.component';

describe('TimesheetEditVersionComponent', () => {
  let component: TimesheetEditVersionComponent;
  let fixture: ComponentFixture<TimesheetEditVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetEditVersionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEditVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
