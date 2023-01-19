import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { GameService } from 'src/app/core/service/game.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() game: Game;
  @Input() reviewsList: UsuarioGame[];
  notaExists = false;
  reviewsIsNotNull = false;
  
  constructor() { }

  ngOnInit(): void { 
    for (var x = 0; x < this.reviewsList.length; x++) {
      if(this.reviewsList[x].comentario != null) {
        this.reviewsIsNotNull = true;
      }
      if(this.reviewsList[x].nota && this.reviewsList[x].nota != 0) {
        this.notaExists = true;
      }
    }
  }

  starsMean() {
    let sum = 0.0;
    for(let a in this.reviewsList) {
      sum = sum + (this.reviewsList[a].nota as number);
    }
    return (sum/(this.reviewsList?.length)).toFixed(1);
  }
}
