import { TestBed } from '@angular/core/testing';

import { FibonacciClockService } from './fibonacci-clock.service';

describe('FibonacciClockService', () => {
  let service: FibonacciClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
