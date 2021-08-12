import { TestBed } from '@angular/core/testing';

import { ValueFormattingService } from './value-formatting.service';

describe('ValueFormattingService', () => {
  let service: ValueFormattingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueFormattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
