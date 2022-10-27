import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/model/game.model';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  @Input() game: Game[] = [];
  filter: string = '';

  constructor() {  }
  
  ngOnInit(): void {  }
}