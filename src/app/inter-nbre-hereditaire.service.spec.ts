import { TestBed } from '@angular/core/testing';

import { InterNbreHereditaireService } from './inter-nbre-hereditaire.service';

describe('InterNbreHereditaireService', () => {
  let service: InterNbreHereditaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreHereditaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
