import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/core/dto/usuario-dto';
import { Game } from 'src/app/core/model/game.model';
import { TokenPayload } from 'src/app/core/model/tokenPayload.model';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  filter: string = '';
  signed = false;
  loading = true;
  user$: Observable<TokenPayload | null>;
  user: TokenPayload | null;
  userLogado: UsuarioDto;
  reviews = 0;

  name: string;
  bio: string;
  pfp: string;
  email: string;
  password: string;
  confirmation_password: string;

  constructor(private userService: UserService, private router: Router) { 
    this.user$ = this.userService.getUserLogado();
    this.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.userService.getUserById(Number(this.user?.sub)).subscribe( res => {
      this.userLogado = res;
      this.signed = true;
      this.loading = false;
    });
  }

  onKey(event: any) {
    this.filter = event.target.value;
  }

  numberWithDots(x: Number): String {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  setName(value:string) {
    this.name = value as string;
  }

  setBio(value:unknown) {
    this.bio = value as string;
  }

  setProfilePicture(value:unknown) {
    this.pfp = value as string;
  }

  setEmail(value:unknown) {
    this.email = value as string;
  }

  setPassword(value:unknown) {
    this.password = value as string;
  }

  setConfirmationPassword(value:unknown) {
    this.confirmation_password = value as string;
  }

  checkPassword(password:string, confirmation_password:string) {
    if(password == confirmation_password) {
      return true;
    }
    return false;
  }

  submitChanges(user: UsuarioDto, name: string, bio: string, pfp: string) {
    this.loading = true;
    if(name) user.nome = name;
    if(bio) user.bio = bio;
    if(pfp) user.pfpUrl = pfp;
    this.userService.updateUser(user).subscribe(() => {
      alert('Profile sucessfully updated.');
      this.loading = false;
      this.router.navigate(['/user','profile']);
    }, () => {
      alert('There was a problem updating your profile.');
      this.loading = false;
    });
  }
}
