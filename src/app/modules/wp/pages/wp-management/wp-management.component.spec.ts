import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpManagementComponent } from './wp-management.component';

describe('WpManagementComponent', () => {
  let component: WpManagementComponent;
  let fixture: ComponentFixture<WpManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
