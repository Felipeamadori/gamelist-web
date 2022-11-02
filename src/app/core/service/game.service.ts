import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model';
import { Page } from '../model/page.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends AbstractService {

  private readonly URL = this.API_URL + "/games";

  constructor(http: HttpClient) {
    super(http);
  }

  getGameByID(id: number): Observable<Game> {
    return this.http.get<Game>(this.URL + '/' + id);
  }

  getGamesPagination(page: number): Observable<Page> {
    const params = new HttpParams()
        .append('page', page.toString());
    return this.http.get<Page>(this.URL, {params});
  }

  getGameByName(name: String): Observable<Game[]> {
    return this.http.post<Game[]>(this.URL + '/by-name', name);
  }

}

