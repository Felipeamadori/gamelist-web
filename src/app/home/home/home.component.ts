import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';

import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;

  constructor(private userService: UserService) {
    /*this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);*/
   }

  ngOnInit(): void {
    if (this.userService.isLogged()) {
     this.userLogado = this.userService.getUserInfo();
      /*this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
        this.userLogado = res;
        this.signed = true;
      });*/
    }
    this.loading = false;
  }  
}
