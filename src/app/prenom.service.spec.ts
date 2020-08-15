import { TestBed } from '@angular/core/testing';

import { PrenomService } from './prenom.service';

describe('PrenomService', () => {
  let service: PrenomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
