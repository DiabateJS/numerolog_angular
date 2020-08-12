import { TestBed } from '@angular/core/testing';

import {InterNbreManquantService} from './inter-nbre-manquant.service';

describe('InterNbreManquantService', () => {
  let service: InterNbreManquantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreManquantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
