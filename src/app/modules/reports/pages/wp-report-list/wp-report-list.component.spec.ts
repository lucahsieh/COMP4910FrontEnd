import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpReportListComponent } from './wp-report-list.component';

describe('WpReportListComponent', () => {
  let component: WpReportListComponent;
  let fixture: ComponentFixture<WpReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
