import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpReportStepperCreationComponent } from './wp-report-stepper-creation.component';

describe('WpReportStepperCreationComponent', () => {
  let component: WpReportStepperCreationComponent;
  let fixture: ComponentFixture<WpReportStepperCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpReportStepperCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpReportStepperCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
