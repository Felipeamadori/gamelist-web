import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenDto } from 'src/app/core/dto/token-dto';
import { Usuario } from 'src/app/core/model/usuario.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    loginForm: FormGroup;
    usuario: Usuario;

    constructor(private fb: FormBuilder, 
                private authService: AuthService,
                private router: Router,
                private toast: ToastrService) { 
      this.usuario = new Usuario;
    }

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        userName: [this.usuario.email, Validators.required],
        password: [this.usuario.senha, Validators.required]
      });
    }

    login() {
      this.loading = true;
      this.authService.authenticate(this.usuario).subscribe(() => { 
          this.loading = false;
          this.router.navigate(['/']);
        }, () => {
          this.loading = false;
          alert('User not found')
          return;
        });
    }
}
