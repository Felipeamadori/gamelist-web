import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  game = { 
    title : "Kerbal Space Program",
    developer: "Squad",
    publisher : "Private Division",
    releaseDate : "27/04/2015",
    shortDescription : "Em Kerbal Space Program, cuide do programa espacial de uma raça alienígena, os Kerbals. Você tem acesso a uma variedade de peças para montar uma nave espacial totalmente funcional que voa (ou não), com base em aerodinâmica e física orbital de verdade.",
    description : "Em Kerbal Space Program, cuide do programa espacial de uma raça alienígena, os Kerbals. Você tem acesso a uma variedade de peças para montar uma nave espacial totalmente funcional que voa (ou não), com base em aerodinâmica e física orbital de verdade. Lance sua tripulação Kerbal em órbita e além (e mantenha ela viva) para explorar luas e planetas do sistema solar, construindo bases e estações espaciais para expandir o alcance da sua expedição. Kerbal Space Program possui três modos de jogo. No modo Ciência, realize experimentos espaciais para liberar tecnologia nova e aumentar o conhecimento da Kerbalidade. No modo Carreira, supervisione cada aspecto do programa espacial, incluindo construção, estratégia, financiamento, melhorias e mais. No modo Sandbox, você é livre para construir qualquer espaçonave que quiser, com todas as peças e tecnologias do jogo.",
    rating : 8.9,
    imageURL : "https://images.ctfassets.net/wn7ipiv9ue5v/2gPmUEQz0K8epMNH8Sb3MQ/aa6fc38af06ea69b7e2aa1b696bc45af/PDwebsite_BoxArt_600x850_KSPPC.jpg?w=1920&h=&fm=avif&q=75",
    tags : ["Space exploration","Simulator","Sci-Fi"],
    minSettings : ["OS: Windows 7 SP1+", "Processor: Core 2 Duo 2.0 Ghz", "Memory: 4 GB RAM", "Graphics: DX10 (SM 4.0) capable, 512MB VRAM", "Hard Drive: 3 GB HD space"],
    recSettings : ["OS: Windows 10 64-bit", "Processor: Core i5", "Memory: 8 GB RAM", "Graphics: DX10 (SM 4.0) capable, 1GB VRAM", "Hard Drive: 4 GB HD space"]
  }

  tagsLength = this.game.tags.length;
  minSettingsLength = this.game.minSettings.length;
  recSettingsLength = this.game.recSettings.length;

  createRange(number : number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
