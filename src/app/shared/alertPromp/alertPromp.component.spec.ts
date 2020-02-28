import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alertPrompComponent } from './alertPromp.component';

describe('alertPrompComponent', () => {
  let component: alertPrompComponent;
  let fixture: ComponentFixture<alertPrompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [alertPrompComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alertPrompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
