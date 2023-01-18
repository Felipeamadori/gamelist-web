import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { Game } from 'src/app/core/model/game.model';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { GameService } from 'src/app/core/service/game.service';

import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;
  pagination = 0;

  filter: string = '';
  games: Game[];
  gamesOnList: Game[];

  constructor(private userService: UserService,
              private gameService: GameService) {
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    if (this.userService.isLogged()) {
      this.signed = true;
      this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
        this.userLogado = res;
        if (this.userLogado) {
          this.userService.getAllGamesById(this.userLogado.id).subscribe(response => {
            this.gamesOnList = response.map(g => g.game);
          });
        }
      });
    };
    this.gameService.getGamesPagination(this.pagination).subscribe(response => {
      this.games = response.content;
    });
    this.loading = false;
  }  
}
