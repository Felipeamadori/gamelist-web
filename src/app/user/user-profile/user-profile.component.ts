import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { Follow } from 'src/app/core/model/follow.model';
import { Game } from 'src/app/core/model/game.model';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { UsuarioGame } from 'src/app/core/model/usuario-game.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { FollowService } from 'src/app/core/service/follow.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // logged user
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  ownProfile = false;
  isFollowing = false;

  // page config
  filter: string = '';
  tab = '1';
  loading = true;

  // profile page
  profileId: Number;
  games: Game[] = [];
  gamesOnList: Game[];
  following: UsuarioDto[];
  followers: UsuarioDto[];
  followingNumber: Number;
  followersNumber: Number;
  reviewsList: UsuarioGame[];  
  userProfile: UsuarioDto;
  reviews: any = 0;
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private followService: FollowService) {    
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }
  
  ngOnInit(): void {
    if(!this.userService.isLogged()) {
      alert('You have to be logged in to view this profile.')
      this.router.navigate(['login']);
    }
    this.route.paramMap.subscribe(param => {
      this.profileId = Number(param.get('userId')) || Number(this.user!.sub)
    })
    if (Number(this.user?.sub) == this.profileId) this.ownProfile = true;
    this.userService.getUserById(this.profileId).subscribe( res => {
      this.userProfile = res;
      this.userProfile.joinDate = '31/10/2022';
      if (this.userProfile) {
        this.followService.getFollowers(this.userProfile).subscribe( followers => {
          this.followers = followers;
          this.followersNumber = followers.length;
          followers.forEach(follower => {
            if(follower.id === Number(this.user?.sub)) this.isFollowing = true;
          }) 
        })
        this.followService.getFollowings(this.userProfile).subscribe( following => {
          this.following = following;
          this.followingNumber = following.length;                       
        })
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

  follow() {    
    this.userService.getUserById(Number(this.user?.sub)).subscribe( r => {
      let novo = new Follow;
      novo.followe = r;
      novo.following = this.userProfile;
      this.followService.followUser(novo).subscribe(response => {
        if (response) {
          if(confirm(`Seguindo ${this.userProfile.nome}...`)){
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate([`/users/${this.profileId}`])
            })
          }
        }
      });
    })    
  }

  unfollow() {
    this.userService.getUserById(Number(this.user?.sub)).subscribe( r => {
      let novo = new Follow;
      novo.followe = r;
      novo.following = this.userProfile;
      this.followService.unfollowUser(novo).subscribe(response => {
        if (response) {
          if(confirm(`Deixou de seguir ${this.userProfile.nome}...`)){
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate([`/users/${this.profileId}`])
            })            
          }
        }
      });
    })
  }

  bottomTab(tab: string) {
    return tab;
  }
}