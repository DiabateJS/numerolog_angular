import { TestBed } from '@angular/core/testing';

import { InterNbreRealisationService } from './inter-nbre-realisation.service';

describe('InterNbreRealisationService', () => {
  let service: InterNbreRealisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreRealisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
