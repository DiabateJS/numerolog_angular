import { TestBed } from '@angular/core/testing';

import { InterCheminVieService } from './inter-chemin-vie.service';

describe('InterCheminVieService', () => {
  let service: InterCheminVieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterCheminVieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
