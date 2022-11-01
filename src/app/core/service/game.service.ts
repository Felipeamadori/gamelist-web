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
  private game: Game;

  constructor(http: HttpClient) {
    super(http);
  }

  getGamesPagination(page: number): Observable<Page> {
    const params = new HttpParams()
        .append('page', page.toString());
    return this.http.get<Page>(this.URL);
    }

}

