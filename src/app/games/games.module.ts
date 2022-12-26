import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GameListComponent } from './game-list/game-list.component';
import { UtilsModule } from '../utils/utils.module';
import { ContentVisualizerComponent } from './content-visualizer/content-visualizer.component';
import { RouterModule } from '@angular/router';
import { GameModule } from './game-list/game/game.module';
import { FilterByName } from './game-list/filter-by-name.pipe';
import { FilterByDescription } from './game-list/filter-by-description.pipe';
import { UserModule } from '../user/user.module';

@NgModule({
    declarations: [ 
        GameListComponent,
        ContentVisualizerComponent,
        FilterByName,
        FilterByDescription
    ],
    imports: [ 
        RouterModule,
        CommonModule, 
        HttpClientModule,
        UtilsModule,
        GameModule
    ],
    exports: [
        GameListComponent,
        GameModule,
        FilterByName,
        FilterByDescription
    ]
})

export class GamesModule {}