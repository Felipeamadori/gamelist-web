import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { UtilsModule } from '../utils/utils.module';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { RouterModule } from '@angular/router';
import { FilterByDescription } from './game-list/filter-by-description.pipe';
import { FilterByname } from './game-list/filter-by-name.pipe';

@NgModule({
    declarations: [ 
        GameComponent, 
        GameListComponent,
        ContentVisualizerComponent,
        FilterByDescription,
        FilterByname
    ],
    imports: [ 
        RouterModule,
        CommonModule, 
        HttpClientModule,
        UtilsModule
    ]
})

export class GamesModule {}