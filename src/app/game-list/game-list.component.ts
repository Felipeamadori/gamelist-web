import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gamesStatic = [
    {
      url:"https://images.ctfassets.net/wn7ipiv9ue5v/2gPmUEQz0K8epMNH8Sb3MQ/aa6fc38af06ea69b7e2aa1b696bc45af/PDwebsite_BoxArt_600x850_KSPPC.jpg?w=1920&h=&fm=avif&q=75",
      title:"Kerbal Space Program",
      alt:"Kerbal Space Program",
      shortDescription:"In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics.",     description : "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics. Launch your Kerbal crew into orbit and beyond (while keeping them alive) to explore moons and planets in the Kerbol solar system, constructing bases and space stations to expand the reach of your expedition. Kerbal Space Program features three gameplay modes. In Science Mode, perform space experiments to unlock new technology and advance the knowledge of Kerbalkind. In Career Mode, oversee every aspect of the space program, including construction, strategy, funding, upgrades, and more. In Sandbox, you are free to build any spacecraft you can think of, with all parts and technology in the game."
    },
    {
      url:"https://static.gamevicio.com/imagens_itens/big/12/alice-madness-returns-cover-011324.webp",
      title:"Alice Madness Returns",
      alt:"Alice Madness Returns",
      shortDescription:"Alice: Madness Returns is a third-person, single-player, action adventure platformer. Visit the grim reality of Victorian London and travel to the beautiful yet ghastly Wonderland to uncover the root of Alice's madness."

    },
    {
      url:"https://i0.wp.com/www.thunderlan.org/wp-content/uploads/2017/08/Counter-Strike-Global-Offensive-cover.jpg?fit=450%2C600&ssl=1",
      title:"Counter-Strike:Global Offensive",
      alt:"Counter-Strike:Global Offensive",
      shortDescription:"Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)."
    },
    {
      url:"https://upload.wikimedia.org/wikipedia/en/0/0c/Boxshot_of_video_game_Project_zomboid.jpg",
      title:"Project Zomboid",
      alt:"Project Zomboid",
      shortDescription:"Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite.."
    },
    {
      url:"https://store-images.s-microsoft.com/image/apps.18799.14047496556148589.9fda5cef-7995-4dbb-a626-66d2ab3feb4f.1e167626-8b7d-47b4-9fe5-d06a43ac6677",
      title:"Ori and the Will of the Wisps",
      alt:"Ori and the Will of the Wisps",
      shortDescription:"Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny."
    }
  ];
}
