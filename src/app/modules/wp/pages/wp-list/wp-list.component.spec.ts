import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpListComponent } from './wp-list.component';

describe('WpListComponent', () => {
  let component: WpListComponent;
  let fixture: ComponentFixture<WpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
