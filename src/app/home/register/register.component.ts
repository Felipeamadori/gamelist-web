import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  registerForm: FormGroup;
  newUser: Usuario;

  constructor(private fb: FormBuilder, 
      private userService: UserService, 
      private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
          email: ['',
              [
                  Validators.required,
                  Validators.email
              ]
          ],
          nome: ['',
              [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(30)
              ]
          ],
          senha: ['',
              [
                  Validators.required,
              ]
          ]
      });
  }

  register() {
    this.loading = true;
    this.newUser = this.registerForm.getRawValue() as Usuario;
    this.userService.registerUser(this.newUser).subscribe(() => {
      alert('Usuario cadastrado com sucesso.');
      this.loading = false;
      this.router.navigate(['']);
    }, () => {
      alert('Ocorreu um problema ao cadastrar o usuario');
      this.loading = false;
    });
  }
}
