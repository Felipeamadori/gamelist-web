import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenDto } from '../dto/token-dto';
import { Usuario } from '../model/usuario.model';
import { AbstractService } from './abstract.service';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(http: HttpClient) {
    super(http);
  }

  authenticate(user: Usuario): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.API_URL + '/login', 
      user, {headers: this.headers}).pipe(tap(res => this.setToken(res.token)));
  }


  hasToken() {
      return !!this.getToken();
  }

  setToken(token: string) {
      window.localStorage.setItem(KEY, token);
  }

  getToken() {
      return window.localStorage.getItem(KEY);
  }

  removeToken() {
      window.localStorage.removeItem(KEY);
  }

}
