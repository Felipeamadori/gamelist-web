import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import jwt_decode from 'jwt-decode';
import { TokenService } from './tokenService';
import { UsuarioDto } from '../dto/usuario-dto';
import { TokenPayload } from '../model/tokenPayload.model';
import { UsuarioGame } from '../model/usuario-game.model';
import { Game } from '../model/game.model';
import { Usuario } from '../model/usuario.model';

const KEY = 'userSession';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService {

  private userSubject = new BehaviorSubject<TokenPayload | null>(null);
  private readonly URL = this.API_URL + "/usuario/";
  private user: UsuarioDto;

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

  logout() {
    this.tokenService.removeToken();
    this.removeUser();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private DecodeAndNotify() {
    const token = this.tokenService.getToken();
    const data = jwt_decode(token) as TokenPayload;
    this.getUserById(Number(data.sub)).subscribe(user => { 
      this.user = user;
      this.setUser(user);
    });
    this.userSubject.next(data);
  }

  getUserById(id: number): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(this.URL + id);
  }

  registerUser(newUser: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(this.URL + 'cadastrar', newUser);
  }

  updateUser(user: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(this.URL + 'atualizar-cadastro', user);
  }

  addGame(ug: UsuarioGame) : Observable<UsuarioGame> {
    return this.http.post<UsuarioGame>(this.URL + 'adicionar-game', ug);
  }

  removeGame(ug: UsuarioGame) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
      body: ug
    };
    return this.http.delete<any>(this.URL + `remover-game`, httpOptions);
  }

  getAllGamesById(id: Number): Observable<UsuarioGame[]> {
    return this.http.get<UsuarioGame[]>(this.URL + 'games/' + id);
  }

  createReview(newReview: UsuarioGame): Observable<UsuarioGame> {
    return this.http.post<UsuarioGame>(this.URL + 'adicionar-review', newReview);
  }

  setUser(user: UsuarioDto) {
      window.localStorage.setItem(KEY, JSON.stringify(user));
  }

  getUserInfo() {
      return JSON.parse(window.localStorage.getItem(KEY) || '') as Usuario;
  }

  removeUser() {
      window.localStorage.removeItem(KEY);
  }

}

