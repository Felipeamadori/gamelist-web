import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ownProfile = false;
  profileId: Number | null;
  tab = '1';

  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userProfile: UsuarioDto;
  reviews: any = 0;
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {    
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);    
  }
  
  ngOnInit(): void {
    if(!this.userService.isLogged()) {
      alert('You have to be logged in to view this profile.')
      this.router.navigate(['login']);
    }
    this.signed = true;
    this.profileId = Number(this.route.snapshot.paramMap.get('userId')) || Number(this.user?.sub)
    if (Number(this.user?.sub) == this.profileId) this.ownProfile = true;
    this.userService.getUserById(this.profileId).subscribe( res => {
      this.userProfile = res;      
      this.userProfile.joinDate = '31/10/2022';
      if (this.userProfile) {
        this.userService.getAllGamesById(this.userProfile.id).subscribe(response => {
          this.games = response.map(g => g.game);
          this.gamesOnList = response.map(g => g.game);
          this.reviewsList = response;
          this.reviews = response.length;
        });
      } else {
        this.reviews = 'Not provided';
      }
      this.loading = false;
    });
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