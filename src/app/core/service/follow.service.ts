import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";
import { Follow } from "../model/follow.model";
import { HttpClient } from "@angular/common/http";
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
    return this.http.post<Follow>(this.URL + 'unfollow', unfollow);
  }

  getFollowings(user: UsuarioDto) {
    return this.http.get<UsuarioDto[]>(this.URL + 'find-followers/' + user.id)
  }

  getFollowers(user: UsuarioDto) {
    return this.http.get<UsuarioDto[]>(this.URL + 'find-followings/' + user.id)
  }
}