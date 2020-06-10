import { TestBed } from '@angular/core/testing';

import { BookconfirmService } from './bookconfirm.service';

describe('BookconfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookconfirmService = TestBed.get(BookconfirmService);
    expect(service).toBeTruthy();
  });
});
