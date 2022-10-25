import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GameComponent } from "./game/game.component";
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
    declarations: [ GameComponent, GameListComponent ],
    exports: [ GameComponent ],
    imports: [ 
        CommonModule, 
        HttpClientModule
    ]
})

export class GamesModule {}