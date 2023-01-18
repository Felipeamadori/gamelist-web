import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { empty } from 'rxjs';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';
import { UserProfileComponent } from 'src/app/user/user-profile/user-profile.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  @Input() games: Game[] = [];
  @Input() gamesOnList: Game[] = [];
  @Input() gamesReviewed: UsuarioGame[];
  @Input() hideAddButtons: boolean = false;
  @Input() currentRoute: string;
  @Input() hideDescription: boolean;
  @Input() maxStackSize: number;
  @Input() home: boolean;

  iterationNumber = 1;
  filter: string = '';
  userLogado: Usuario;

  constructor(private userService: UserService, 
              private cd: ChangeDetectorRef, 
              private router: Router,
              private viewportScroller: ViewportScroller,
              changeDetectorRef: ChangeDetectorRef) {  }
  
  ngOnInit(): void {
    this.userLogado = this.userService.getUserInfo() as Usuario;
    console.log(this.userLogado.nome);
  }
  
  addGame(newGame: Game) {
    let novo = new UsuarioGame;
    novo.game = newGame;
    novo.usuario = this.userLogado;
    this.userService.addGame(novo).subscribe(response => {
      if (response) {
        if(confirm("'" + response.game.name + "' Adicionado com sucesso")){
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/' + this.currentRoute]);
          }); 
        }
      }
    });
  }

  checkGames(game: Game, gameList: Game[]) {
    for(let i in gameList){
      if(game.id == gameList[i].id) {
        return true;
      }
    }
    return false;
  }

  checkReviews (game: Game, gamesReviewed: UsuarioGame[]) {
    for(let i in gamesReviewed){
      if(game.id == gamesReviewed[i].game.id && gamesReviewed[i].comentario.length > 0) {
        return true;
      }
    }
    return false;
  }

  refreshComponent() {
    this.cd.detectChanges();
  }

  removeGame(g: Game) {
    let remover = new UsuarioGame;
    remover.game = g;
    remover.usuario = this.userLogado;
    this.userService.removeGame(remover).subscribe(response => {
        if(confirm("Removido com sucesso")){
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/' + this.currentRoute]);
          }); 
        }
    });
  }

  setMaxGamesSize(maxStackSize?: number) {
    if(maxStackSize != null && this.games?.length > maxStackSize) {
      this.games.length = maxStackSize;
      console.log("new array size = " + maxStackSize);
    }
  }

  iterationNumberIncrement() {
    this.iterationNumber += 1;
  }

  iterationNumberRefresh() {
    this.iterationNumber = 1;
  }
}