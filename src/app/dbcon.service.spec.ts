import { TestBed } from '@angular/core/testing';

import { DbconService } from './dbcon.service';

describe('DbconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbconService = TestBed.get(DbconService);
    expect(service).toBeTruthy();
  });
});
