import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameDisplayComponent } from "./game-display/game-display.component";

@NgModule({
    declarations: [ GameDisplayComponent ],
    exports: [ GameDisplayComponent ],
    imports: [ CommonModule ]
})

export class GamelistModule {}