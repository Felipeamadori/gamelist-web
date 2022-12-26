import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'; 
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';

import { GameService } from 'src/app/core/service/game.service';
import { UserService } from 'src/app/core/service/user.service';
import { Game } from '../../core/model/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  games: Game[];
  gamesOnList: Game[];
  filter: string = '';
  noMatches = false;
  loading = true;
  pagination = 0;
  debounce: Subject<string> = new Subject<string>();
  logado: boolean; 
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;

  constructor(private gameService: GameService, private userService: UserService) {  
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }
  
  ngOnInit(): void {
    this.logado = this.userService.isLogged();
    this.gameService.getGamesPagination(this.pagination).subscribe(response => {
      this.games = response.content;
    });
    if (this.userService.isLogged()) {
      this.userService.getUserById(Number(this.user?.sub)).subscribe(userResponse => {
        this.userLogado = userResponse;
        if (this.userLogado) {
          this.userService.getAllGamesById(this.userLogado.id).subscribe(userListResponse => {
            this.gamesOnList = userListResponse;
          });
          this.userService
        } else {
          this.gamesOnList = [];
        }
      });
    }
    this.debounce
      .pipe(debounceTime(300))  
      .subscribe(filter => {
        this.filter = filter;
        if (this.filter !== '') {
            this.gameService.getGameByName(this.filter).subscribe(response => {
              this.games = response;
            });
          } else {
            this.gameService.getGamesPagination(this.pagination).subscribe(response => {
              this.games = response.content;
            });
          }
        });
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKey(event: any) {
    return event.target.value;
  }

  addPage(): void {
    this.pagination += 1;
    this.gameService.getGamesPagination(this.pagination).subscribe(response => {
      this.games.push(...response?.content);
      this.loading = false;
    });
  }
}
