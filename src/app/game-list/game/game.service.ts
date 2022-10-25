import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "./game";

const API = '';

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
        .get<Game[]>(API + '');
    }
}