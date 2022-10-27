import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/utils/utils.module';
import { GameComponent } from './game.component';

@NgModule({
    declarations: [ 
        GameComponent
    ],
    imports: [ 
        CommonModule,
        UtilsModule,
        RouterModule
    ],
    exports: [
        GameComponent
    ]
})

export class GameModule {}