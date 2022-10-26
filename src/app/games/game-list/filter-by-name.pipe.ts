import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "src/app/core/model/game.model";

@Pipe({ name: 'filterByName' })
export class FilterByname implements PipeTransform {
    transform(gamesStatic: Game[], nameQuery: string) {
        nameQuery = nameQuery.trim().toLowerCase();

        if(nameQuery) {
            return gamesStatic.filter(gamesStatic =>
                    gamesStatic.name.toLowerCase().includes(nameQuery)
                );
        } else {
            return gamesStatic;
        }
    }

}