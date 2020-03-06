import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpReportComponent } from './wp-report.component';

describe('WpReportComponent', () => {
  let component: WpReportComponent;
  let fixture: ComponentFixture<WpReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WpReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
