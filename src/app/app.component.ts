import { Component, OnInit } from '@angular/core';
import { GameService } from './games/game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  games: any[] = [];
  
  constructor(private gameService: GameService) {  }
  
  ngOnInit(): void {
    this.gameService
      .listFromUser('')
      .subscribe(games => this.games = games);
  }
}