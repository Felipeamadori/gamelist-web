import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesModule } from '../games/games.module';
import { GameModule } from '../games/game-list/game/game.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UtilsModule } from '../utils/utils.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent,
    FollowersComponent
  ],
  imports: [
    CommonModule,
    GamesModule,
    GameModule,
    UtilsModule,
    RouterModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserModule { }
