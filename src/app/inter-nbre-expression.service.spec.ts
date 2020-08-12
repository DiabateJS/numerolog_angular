import { TestBed } from '@angular/core/testing';

import { InterNbreExpressionService } from './inter-nbre-expression.service';

describe('InterNbreExpressionService', () => {
  let service: InterNbreExpressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterNbreExpressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
