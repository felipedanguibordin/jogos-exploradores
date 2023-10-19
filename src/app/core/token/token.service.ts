import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const KEY = 'tokenPortalAtividades';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private router: Router) {}
  hasToken() {
    return !!this.getToken();
  }

  setToken(token: any): void {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.getToken(),
      }),
    };
    return httpOptions;
  }
}
