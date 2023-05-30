import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { UsuarioDto } from '../core/dto/usuario-dto';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users: UsuarioDto[] | null;
  loading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
      this.loading = false;
    })
  }

}
