import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { GameService } from 'src/app/core/service/game.service';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {

  @Input() reviewsList : UsuarioGame[];

  notaExists = false;
  reviewsIsNotNull = false;

  constructor( ) { }

  ngOnInit(): void {
    for (let review in this.reviewsList.map(g => g.comentario)) {
      if(review != null) {
        this.reviewsIsNotNull = true;
        this.setNotaExists();
      }
    }
  }

  setNotaExists() {
    this.notaExists = true;
  }
}
