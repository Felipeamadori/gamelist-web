import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { FollowService } from 'src/app/core/service/follow.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  @Input() followers: UsuarioDto[];
  @Input() following: UsuarioDto[];
  @Input() showFollowers: boolean;

  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null; 

  constructor(private userService: UserService, private router: Router, private followService: FollowService, private cd: ChangeDetectorRef) {
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {   
  }

  refreshComponent() {
    this.cd.detectChanges();
  }

}
