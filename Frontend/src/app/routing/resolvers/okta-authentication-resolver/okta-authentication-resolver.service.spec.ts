import { TestBed } from '@angular/core/testing';

import { OktaAuthenticationResolverService } from './okta-authentication-resolver.service';

describe('OktaAuthenticationResolverService', () => {
  let service: OktaAuthenticationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaAuthenticationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
