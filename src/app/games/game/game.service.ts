import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "./game";

const API = 'localhost:5432';

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private http: HttpClient) {}

    listFromGame(gameTitle: string) {
        return this.http
        .get<Game[]>(API + '/' + gameTitle);
    }
}