import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/core/model/game.model';
import { GameService } from 'src/app/core/service/game.service';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  game: Game;
  genresLength: number;
  categoriesLength: number;
  rating: number;
  loading = true;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const id_game = this.activatedRoute.snapshot.params.id_game
    this.gameService
      .getGameByID(id_game)
      .subscribe(game => {
        this.game = game
        this.genresLength = this.splitCommas(this.game.genres).length;
        this.categoriesLength = this.splitCommas(this.game.categ).length;
        this.rating = this.ratingsMean(this.game.positive_rating, this.game.negative_rating);
        this.loading = false;
      })
  }

  splitCommas(str: String){
    return str.split(';'); 
  }

  ratingsMean(positive: number, negative: number){
    return Math.round(100*positive/(positive + negative))/10;
  }

  createRange(number : number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
