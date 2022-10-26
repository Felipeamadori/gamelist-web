import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;
  signed = false;
  clicked = false;
  user_name = "Tharesu";

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
      this.userLogado = res;
      console.log(this.userLogado);
    })
  }

  handleSignClick() {
    this.signed = true;
  }

}
