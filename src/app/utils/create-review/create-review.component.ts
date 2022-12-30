import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  @Input() game: Game;
  @Input() userList: UsuarioGame[];

  rating: Number;
  comment: String;

  currentGame: UsuarioGame;
  userLogado: Usuario;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userLogado = this.userService.getUserInfo() as Usuario;
    this.currentGame = this.userList.filter(g => g.game.id === this.game.id)[0];
    if(this.currentGame) {
      this.rating = this.currentGame.nota;
      this.comment = this.currentGame.comentario;
    }
    else {
      this.rating = 0;
      this.comment = '';
    }
  }
  
  checkGames(game: Game, userList: UsuarioGame[]) {
    for(let i in userList){
      if(game.id == userList[i].game.id) {
        return true;
      }
    }
    return false;
  }

  submitReview() {
    let newReview = new UsuarioGame();
    if(this.checkGames(this.game, this.userList)){
      newReview.id = this.currentGame.id;
    } else {
      newReview.id = this.game.id;
    }
    newReview.nota = this.rating;
    newReview.comentario = this.comment;
    newReview.game = this.game;
    newReview.usuario = this.userLogado;
    
    this.userService.createReview(newReview).subscribe(response => {
        if (response) {
          alert("ok")
        }
    });
  }
} 