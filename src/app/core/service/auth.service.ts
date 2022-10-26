import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenDto } from '../dto/token-dto';
import { Usuario } from '../model/usuario.model';
import { AbstractService } from './abstract.service';
import { UserService } from './user.service';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(http: HttpClient, private userService: UserService) {
    super(http);
  }

  authenticate(user: Usuario): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.API_URL + '/login', 
      user, {headers: this.headers}).pipe(tap(res => this.userService.setToken(res.token)));
  }

}
