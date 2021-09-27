import { Injectable } from '@angular/core';
import { MOTIVE_TOKEN } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setAuthorizationToken(token: string) {
    localStorage.setItem(MOTIVE_TOKEN, token);
  }

  getAuthorizationToken(): string {
    return localStorage.getItem(MOTIVE_TOKEN);
  }
}
