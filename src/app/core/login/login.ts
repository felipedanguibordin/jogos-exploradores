import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class login {
  formLogin!: FormGroup;

  usuarios: Array<string> = [
    'felipe',
    'anna',
    'isabela',
    'maria',
    'matheus',
    'iton',
  ];

  senhas: string = 'a';

  loadingLogin: boolean = false;

  form: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.fnInitForm();
  }

  fnInitForm() {
    this.formLogin = this.formBuilder.group({
      usuario: [''],

      senha: [''],
    });
  }

  fnAcessar() {
    const usuario = this.formLogin.get('usuario')?.value;
    const senha = this.formLogin.get('senha')?.value;

    if (!usuario) {
      Swal.fire('Ops!', 'Campo usuário obrigatório.', 'warning');
      return;
    }

    if (!senha) {
      Swal.fire('Ops!', 'Campo senha obrigatório.', 'warning');
      return;
    }

    this.loadingLogin = true;

    const usuarioLowerCase = usuario.toLowerCase();

    if (
      this.usuarios.some((u) => u.toLowerCase() === usuarioLowerCase) &&
      senha === this.senhas
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire(
        'Ops!',
        'Usuário ou Senha inválidos, tente novamente.',
        'warning'
      );
      this.loadingLogin = false;
    }
  }
}
