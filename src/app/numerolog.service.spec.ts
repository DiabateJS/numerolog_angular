import { TestBed } from '@angular/core/testing';

import { NumerologService } from './numerolog.service';

describe('NumerologService', () => {
  let service: NumerologService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerologService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
