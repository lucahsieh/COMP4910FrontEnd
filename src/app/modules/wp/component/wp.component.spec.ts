import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpComponent } from './wp.component';

describe('WpComponent', () => {
  let component: WpComponent;
  let fixture: ComponentFixture<WpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
