import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { Game } from 'src/app/core/model/game.model';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  game: Game[] = [];
  filter: string = '';
  ownProfile = true;
  //this.myProfile();

  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;
  
  constructor(private userService: UserService, private router: Router) { 
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
    
    this.game = [
      {
        id_game:1,
        urlMedia:"https://images.ctfassets.net/wn7ipiv9ue5v/2gPmUEQz0K8epMNH8Sb3MQ/aa6fc38af06ea69b7e2aa1b696bc45af/PDwebsite_BoxArt_600x850_KSPPC.jpg?w=1920&h=&fm=avif&q=75",
        name:"Kerbal Space Program",
        description:"In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics.",
        appid: 0,
        categ: "",
        genres: "",
        positive_rating: 0,
        negative_rating: 0
      },
      {
        id_game:2,
        urlMedia:"https://static.gamevicio.com/imagens_itens/big/12/alice-madness-returns-cover-011324.webp",
        name:"Alice Madness Returns",
        description:"Alice: Madness Returns is a third-person, single-player, action adventure platformer. Visit the grim reality of Victorian London and travel to the beautiful yet ghastly Wonderland to uncover the root of Alice's madness.",
        appid: 0,
        categ: "",
        genres: "",
        positive_rating: 0,
        negative_rating: 0
      },
      {
        id_game:3,
        urlMedia:"https://i0.wp.com/www.thunderlan.org/wp-content/uploads/2017/08/Counter-Strike-Global-Offensive-cover.jpg?fit=450%2C600&ssl=1",
        name:"Counter-Strike: Global Offensive",
        description:"Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        appid: 0,
        categ: "",
        genres: "",
        positive_rating: 0,
        negative_rating: 0
      },
      {
        id_game:4,
        urlMedia:"https://upload.wikimedia.org/wikipedia/en/0/0c/Boxshot_of_video_game_Project_zomboid.jpg",
        name:"Project Zomboid",
        description:"Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..",
        appid: 0,
        categ: "",
        genres: "",
        positive_rating: 0,
        negative_rating: 0
      },
      {
        id_game:5,
        urlMedia:"https://store-images.s-microsoft.com/image/apps.18799.14047496556148589.9fda5cef-7995-4dbb-a626-66d2ab3feb4f.1e167626-8b7d-47b4-9fe5-d06a43ac6677",
        name:"Ori and the Will of the Wisps",
        description:"Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.",
        appid: 0,
        categ: "",
        genres: "",
        positive_rating: 0,
        negative_rating: 0
      }
    ];
  }
  
  ngOnInit(): void {
    this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
      this.userLogado = res;
      this.signed = true;
      this.loading = false;
      this.userLogado.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.";
      this.userLogado.joinDate = "31/10/2022";
      this.userLogado.reviews = 654321;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  onKey(event: any) {
    this.filter = event.target.value;
  }

  myProfile() {
    if(1 > 0) {
      return true;
    } else {
      return false;
    }
  }

  numberWithDots(x: Number): String {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
