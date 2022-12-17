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
  @Input() hideAddButtons: boolean = false;

  filter: string = '';
  userLogado: Usuario;

  constructor(private userService: UserService, 
              private cd: ChangeDetectorRef, 
              private router: Router,
              private viewportScroller: ViewportScroller,
              changeDetectorRef: ChangeDetectorRef) {  }
  
  ngOnInit(): void {
    this.userLogado = this.userService.getUserInfo() as Usuario;
  }
  
  addGame(newGame: Game) {
    let novo = new UsuarioGame;
    novo.game = newGame;
    novo.usuario = this.userLogado;
    this.userService.addGame(novo).subscribe(response => {
      if (response) {
        if(confirm("'" + response.game.name + "' Adicionado com sucesso")){
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/games']);
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

  refreshComponent() {
    this.cd.detectChanges();
  }
}