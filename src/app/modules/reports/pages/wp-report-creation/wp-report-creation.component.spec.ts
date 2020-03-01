import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpReportCreationComponent } from './wp-report-creation.component';

describe('WpReportCreationComponent', () => {
  let component: WpReportCreationComponent;
  let fixture: ComponentFixture<WpReportCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpReportCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpReportCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
