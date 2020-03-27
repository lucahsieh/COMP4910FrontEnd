import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResetPWComponent } from './employee-reset-pw.component';

describe('EmployeeResetPWComponent', () => {
  let component: EmployeeResetPWComponent;
  let fixture: ComponentFixture<EmployeeResetPWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResetPWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResetPWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
