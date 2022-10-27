import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "src/app/core/model/game.model";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
    transform(gamesStatic: Game[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {
            return gamesStatic.filter(gamesStatic =>
                    gamesStatic.description.toLowerCase().includes(descriptionQuery)
                );
        } else {
            return gamesStatic;
        }
    }
}