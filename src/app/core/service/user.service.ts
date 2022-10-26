import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import jwt_decode from 'jwt-decode';
import { TokenService } from './tokenService';
import { UsuarioDto } from '../dto/usuario-dto';
import { TokenPayload } from '../model/tokenPayload.model';


@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService {

  private userSubject = new BehaviorSubject<TokenPayload | null>(null);
  private readonly URL = this.API_URL + "/usuario/";

  constructor(http: HttpClient, private tokenService: TokenService) {
    super(http);
    this.tokenService.hasToken() && this.DecodeAndNotify();
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.DecodeAndNotify();
  }

  getUserLogado() {
    return this.userSubject.asObservable();
  }

  private DecodeAndNotify() {
    const token = this.tokenService.getToken();
    const data = jwt_decode(token) as TokenPayload;
    this.userSubject.next(data);
  }

  getUserById(id: number): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(this.URL + id);
  }
}

