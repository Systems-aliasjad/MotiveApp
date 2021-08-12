import { TestBed, async, inject } from '@angular/core/testing';

import { BypassOktaGuard } from './app-master.guard';

describe('AppMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BypassOktaGuard]
    });
  });

  it('should ...', inject([BypassOktaGuard], (guard: BypassOktaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
