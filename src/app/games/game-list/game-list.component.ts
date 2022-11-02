import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'; 

import { GameService } from 'src/app/core/service/game.service';
import { Game } from '../../core/model/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  games: Game[];
  filter: string = '';
  noMatches = false;
  loading = true;
  pagination = 0;
  debounce: Subject<string> = new Subject<string>(); 

  constructor(private gameService: GameService) {  }
  
  ngOnInit(): void {
    this.gameService.getGamesPagination(this.pagination).subscribe(response => {
      this.games = response.content;
      this.loading = false;
    });
    this.debounce
      .pipe(debounceTime(300))  
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKey(event: any) {
    return event.target.value;
  }

  addPage(): void {
    this.pagination += 1;
    this.gameService.getGamesPagination(this.pagination).subscribe(response => {
      this.games.push(...response?.content);
      this.loading = false;
    });
  }
}
