import { Injectable } from '@angular/core';
import { MOTIVE_TOKEN } from '../shared/constants/constants';
//import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: string;
  constructor(
    //private sharedService: SharedService,
  ) {}
  setAuthorizationToken(token: string) {
    this.authToken = token;
  }

  getAuthorizationToken(): string {
    return this.authToken;;
    //return this.sharedService.getLocalStorage(MOTIVE_TOKEN);
  }
}
