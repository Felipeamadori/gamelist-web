import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
    declarations: [ 
        GameComponent, 
        GameListComponent
    ],
    imports: [ 
        CommonModule, 
        HttpClientModule,
        UtilsModule
    ]
})

export class GamesModule {}