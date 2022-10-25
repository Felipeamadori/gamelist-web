import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GameComponent } from "./game/game.component";

@NgModule({
    declarations: [ GameComponent ],
    exports: [ GameComponent ],
    imports: [ 
        CommonModule, 
        HttpClientModule
    ]
})

export class GamelistModule {}