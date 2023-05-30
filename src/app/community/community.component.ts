import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { UsuarioDto } from '../core/dto/usuario-dto';
import { Usuario } from '../core/model/usuario.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users: UsuarioDto[] | null;
  loading = true;
  userLogado: Usuario;

  constructor(private userService: UserService) {
    this.userLogado = this.userService.getUserInfo() as Usuario;
   }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res.filter(u => u.id != this.userLogado?.id);
      this.loading = false;
    })
  }

}
