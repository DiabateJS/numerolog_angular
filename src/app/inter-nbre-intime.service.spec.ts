import { TestBed } from '@angular/core/testing';

import { InterNbreIntimeService } from './inter-nbre-intime.service';

describe('InterNbreIntimeService', () => {
  let service: InterNbreIntimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreIntimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
