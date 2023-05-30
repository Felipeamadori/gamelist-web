import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";
import { Follow } from "../model/follow.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioDto } from "../dto/usuario-dto";

@Injectable({
  providedIn: 'root'
})
export class FollowService extends AbstractService {
  private readonly URL = this.API_URL + "/social/";

  constructor(http: HttpClient) {
    super(http);
  }

  followUser(follow: Follow) {
    return this.http.post<Follow>(this.URL + 'follow', follow);
  }

  unfollowUser(unfollow: Follow) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
      body: unfollow
    };
    return this.http.delete<any>(this.URL + 'unfollow', httpOptions);
  }

  getFollowings(user: UsuarioDto) {
    return this.http.get<UsuarioDto[]>(this.URL + 'find-followers/' + user.id)
  }

  getFollowers(user: UsuarioDto) {
    return this.http.get<UsuarioDto[]>(this.URL + 'find-followings/' + user.id)
  }
}