import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  loading = true;
  signed = false;
  clicked = false;
  currentPage: string;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.getCurrentPage();
    if(this.userService.isLogged()) {
      this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
        this.userLogado = res;
        this.signed = true;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  logout() {
    this.userService.logout();
    if(this.currentPage == '/user/profile' || this.currentPage == '/user/edit') {
      this.router.navigate(['']);
    } else {
      window.location.reload();
    }
  }

  handleSignClick() {
    this.signed = true;
  }

  getCurrentPage() {
    this.currentPage = this.router.url;
  }
}
