import { TestBed } from '@angular/core/testing';

import { DomserviceService } from './domservice.service';

describe('DomserviceService', () => {
  let service: DomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
