import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpReportViewComponent } from './wp-report-view.component';

describe('WpReportViewComponent', () => {
  let component: WpReportViewComponent;
  let fixture: ComponentFixture<WpReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WpReportViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
