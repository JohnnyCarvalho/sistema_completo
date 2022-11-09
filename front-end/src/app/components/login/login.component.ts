import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserListLogin } from 'src/models/login-model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private newLoginUser: FormBuilder,
    private loginUserService: UserService
  ) {}

  formulario = this.newLoginUser.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    psw: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  hide = true;

  // --> FALTA IMPLEMENTAR A LÓGICA PARA NÃO DEIXAR USUÁRIO DIGITAR ESPAÇOS EM BRANCO <--

  ngOnInit(): void {}

  // Método para logar usuário no sistema
  public loginUser() {
    if (this.formulario.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O formulário deve ser preenchido corretamente!',
      });
    }
    else {
      let newLogin: UserListLogin = new UserListLogin(
        this.formulario.value.email,
        this.formulario.value.psw
      );
      this.loginUserService.loginUser(newLogin).subscribe(
        (res) => {
        (newLogin = res)

        if (res === 'error') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Udsuário não cadastrado!',
          });

        }
        else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login efetuado com sucesso!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.formulario.reset();
        }
      });
      // exemplo teste, quando tiver implementado o back e a resposta vier como true aqui vai haver um códico que entrará na home
    }
  }
}


