import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { flowCodes } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  public flowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/internet/account-not-active']);
    } else if (CodeId === flowCodes.routerRebootRequired) {
      this.router.navigate(['issues/internet/router-reboot-required'], { state: { ontDetails: data?.ontDetails, routerDetails: data?.routerDetails } });
    }
  }
}
