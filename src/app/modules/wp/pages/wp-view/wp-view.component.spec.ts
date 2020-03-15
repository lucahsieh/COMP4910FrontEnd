import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpViewComponent } from './wp-view.component';

describe('WpViewComponent', () => {
  let component: WpViewComponent;
  let fixture: ComponentFixture<WpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
