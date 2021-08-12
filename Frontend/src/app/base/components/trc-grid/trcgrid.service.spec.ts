import { TestBed } from '@angular/core/testing';

import { TrcgridService } from './trcgrid.service';

describe('TrcgridService', () => {
  let service: TrcgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrcgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
