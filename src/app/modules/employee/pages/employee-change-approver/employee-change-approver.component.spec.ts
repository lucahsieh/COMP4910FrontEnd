import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChangeApproverComponent } from './employee-change-approver.component';

describe('EmployeeChangeApproverComponent', () => {
  let component: EmployeeChangeApproverComponent;
  let fixture: ComponentFixture<EmployeeChangeApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChangeApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChangeApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
