import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService extends AbstractService {

  constructor(http: HttpClient) {
    super(http);
  }

  hasToken() {
      return !!this.getToken();
  }

  setToken(token: string) {
      window.localStorage.setItem(KEY, token);
  }

  getToken() {
      return window.localStorage.getItem(KEY) || '';
  }

  removeToken() {
      window.localStorage.removeItem(KEY);
  }

}
