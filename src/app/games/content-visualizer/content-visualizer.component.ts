import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { GameService } from 'src/app/core/service/game.service';
import { UserService } from 'src/app/core/service/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  hideAddButtons: boolean = false;
  tab = '1';
  game: Game;
  gamesOnList: Game[];
  userList: UsuarioGame[];
  genresLength: number;
  categoriesLength: number;
  rating: number;
  loading = true;
  loadingReviews = true;
  userLogado: Usuario;
  currentGame: UsuarioGame;
  reviewsList: UsuarioGame[];
  buttonName: string;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
        this.gameService.getAllReviewsById(this.game.id).subscribe(response => {
          this.reviewsList = response;
          console.log(this.reviewsList);
          this.loadingReviews = false;
        })
      })
    this.userLogado = this.userService.getUserInfo() as Usuario;
    if(this.userLogado){
      this.userService.getAllGamesById(this.userLogado.id).subscribe(userListResponse => {
        this.gamesOnList = userListResponse.map(g => g.game);
        this.userList = userListResponse;
        this.currentGame = this.userList.filter(g => g.game.id === this.game.id)[0];
      });
    }
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

  checkGames(game: Game, gameList: Game[]) {
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
      if(confirm("'" + response.game.name + "' Adicionado com sucesso")){
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/games/' + this.game.id]);
        }); 
      }
    });
  }

  removeGame() {
    let remover = new UsuarioGame;
    remover.game = this.game;
    remover.usuario = this.userLogado;
    this.userService.removeGame(remover).subscribe(response => {
      if(confirm("Removido com sucesso")){
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/games/' + this.game.id]);
        }); 
      }
    });
  }

  bottomTab(tab: string) {
    return tab;
  }

  defineButtonName() {
    if(this.currentGame.comentario != null) {
      this.buttonName = 'Edit Review';
    } else {
      this.buttonName = 'Create Review'; 
    }
  }
}