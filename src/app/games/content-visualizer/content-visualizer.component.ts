import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { GameService } from 'src/app/core/service/game.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  hideAddButtons: boolean = false;
  game: Game;
  gamesOnList: Game[];
  genresLength: number;
  categoriesLength: number;
  rating: number;
  loading = true;
  userLogado: Usuario;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id_game = this.activatedRoute.snapshot.params.id_game
    this.gameService
      .getGameByID(id_game)
      .subscribe(game => {
        this.game = game
        this.genresLength = this.splitCommas(this.game.genres).length;
        this.categoriesLength = this.splitCommas(this.game.categ).length;
        this.rating = this.ratingsMean(this.game.positiveRating, this.game.negativeRating);
        this.loading = false;
      })
      this.userService.getAllGamesById(this.userLogado.id).subscribe(userListResponse => {
        this.gamesOnList = userListResponse;
      });
  }

  splitCommas(str: String){
    return str.split(';'); 
  }

  ratingsMean(positive: number, negative: number){
    return Math.round(100*positive/(positive + negative))/10;
  }

  createRange(number : number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  checkList(game: Game, gameList: Game[]){
    for(let i in gameList){
      if(game.id == gameList[i].id) {
        return true;
      }
    }
    return false;
  }

  addGame() {
    let novo = new UsuarioGame;
    novo.game = this.game;
    novo.usuario = this.userLogado;
    this.userService.addGame(novo).subscribe(response => {
      if (response) {
        alert(response.game.name + 'Adicionado com sucesso')
      }
    });
  }

  /*removeGame() {
    let novo = new UsuarioGame
    this.userService.removeGame(novo).subscribe(response => {
      if (response) {
        alert(response.game.name + 'Removido com sucesso')
      }
    });
  }*/
}