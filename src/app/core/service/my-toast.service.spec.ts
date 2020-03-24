import { TestBed } from '@angular/core/testing';

import { MyToastService } from './my-toast.service';

describe('MyToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyToastService = TestBed.get(MyToastService);
    expect(service).toBeTruthy();
  });
});
