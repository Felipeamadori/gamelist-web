import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.model';
import { UserProfileComponent } from 'src/app/user/user-profile/user-profile.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  @Input() games: Game[] = [];
  @Input() hideAddButtons: boolean = false;
  filter: string = '';

  constructor() {  }
  
  ngOnInit(): void {  }
  
  addGame(newGame: Game) {
    //this.games.push(newGame);
  }
}
