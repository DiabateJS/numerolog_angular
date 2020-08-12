import { TestBed } from '@angular/core/testing';

import { InterNbreActifService } from './inter-nbre-actif.service';

describe('InterNbreActifService', () => {
  let service: InterNbreActifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreActifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
