import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesModule } from '../games/games.module';
import { GameModule } from '../games/game-list/game/game.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UtilsModule } from '../utils/utils.module'

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    GamesModule,
    GameModule,
    UtilsModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserModule { }
