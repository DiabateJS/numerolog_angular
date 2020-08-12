import { TestBed } from '@angular/core/testing';

import {InterNbreDominantService} from './inter-nbre-dominant.service';

describe('InterNbreDominantService', () => {
  let service: InterNbreDominantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreDominantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
