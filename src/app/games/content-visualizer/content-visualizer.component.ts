import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  game: any[] = [];

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    /*const gameTitle = this.activatedRoute.snapshot.params.gameTitle
    this.gameService
      .listFromGame(gameTitle)
      .subscribe(game => this.game = game)*/
  }

  gameStatic = { 
    title : "Kerbal Space Program",
    developer: "Squad",
    publisher : "Private Division",
    releaseDate : "27/04/2015",
    shortDescription : "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics.",
    description : "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics. Launch your Kerbal crew into orbit and beyond (while keeping them alive) to explore moons and planets in the Kerbol solar system, constructing bases and space stations to expand the reach of your expedition. Kerbal Space Program features three gameplay modes. In Science Mode, perform space experiments to unlock new technology and advance the knowledge of Kerbalkind. In Career Mode, oversee every aspect of the space program, including construction, strategy, funding, upgrades, and more. In Sandbox, you are free to build any spacecraft you can think of, with all parts and technology in the game.",
    rating : 8.9,
    imageURL : "https://images.ctfassets.net/wn7ipiv9ue5v/2gPmUEQz0K8epMNH8Sb3MQ/aa6fc38af06ea69b7e2aa1b696bc45af/PDwebsite_BoxArt_600x850_KSPPC.jpg?w=1920&h=&fm=avif&q=75",
    tags : ["Space exploration","Simulator","Sci-Fi"],
    minSettings : ["OS: Windows 7 SP1+", "Processor: Core 2 Duo 2.0 Ghz", "Memory: 4 GB RAM", "Graphics: DX10 (SM 4.0) capable, 512MB VRAM", "Hard Drive: 3 GB HD space"],
    recSettings : ["OS: Windows 10 64-bit", "Processor: Core i5", "Memory: 8 GB RAM", "Graphics: DX10 (SM 4.0) capable, 1GB VRAM", "Hard Drive: 4 GB HD space"]
  }

  tagsLength = this.gameStatic.tags.length;
  minSettingsLength = this.gameStatic.minSettings.length;
  recSettingsLength = this.gameStatic.recSettings.length;

  createRange(number : number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
