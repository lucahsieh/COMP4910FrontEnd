import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpEditComponent } from './wp-edit.component';

describe('WpEditComponent', () => {
  let component: WpEditComponent;
  let fixture: ComponentFixture<WpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
