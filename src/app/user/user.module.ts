import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesModule } from '../games/games.module';
import { GameModule } from '../games/game-list/game/game.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    GamesModule,
    GameModule
  ]
})
export class UserModule { }
