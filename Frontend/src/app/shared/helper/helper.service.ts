import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { flowCodes } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  public flowIdentifier(CodeId: string) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate['unknown-error'];
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate['issues/internet/account-not-active'];
    }
  }
}
