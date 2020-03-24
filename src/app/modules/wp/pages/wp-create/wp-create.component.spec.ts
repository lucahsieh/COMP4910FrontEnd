import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpCreateComponent } from './wp-create.component';

describe('WpCreateComponent', () => {
  let component: WpCreateComponent;
  let fixture: ComponentFixture<WpCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
