import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { Game } from 'src/app/core/model/game.model';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  games: Game[] = [];
  gamesOnList: Game[];
  reviewsList: UsuarioGame[];
  filter: string = '';
  ownProfile = true;
  //this.myProfile();
  tab = '1';

  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;
  reviews : any = 0;
  
  constructor(private userService: UserService, private router: Router) { 
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }
  
  ngOnInit(): void {
    this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
      this.userLogado = res;
      this.signed = true;
      this.userLogado.joinDate = "31/10/2022";
      if (this.userLogado) {
        this.userService.getAllGamesById(this.userLogado.id).subscribe(response => {
          this.games = response.map(g => g.game);
          this.gamesOnList = response.map(g => g.game);
          this.reviewsList = response;
          this.reviews = response.length;
        });
      } else {
        this.reviews = "Not provided";
      }
      this.loading = false;
    });
  }

  checkReviews() {
    console.log(this.reviewsList);
  }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  onKey(event: any) {
    this.filter = event.target.value;
  }

  numberWithDots(x: Number): String {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  bottomTab(tab: string) {
    return tab;
  }
}