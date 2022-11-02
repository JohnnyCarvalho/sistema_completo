import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'backend/api';
import { Observable } from 'rxjs';
import { UserListLogin } from 'src/models/login-model';
import { RegisterModel } from 'src/models/register-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  //método para inserir novo usuário no banco de dados
  public registerUser(newUser: RegisterModel): Observable<any> {

    return this.http.post<any>(`${API}/data-user`, {newUser: newUser}) //registration
      .pipe(
        res => res,
        error => error
      )
  }

  // Método para logar usuário no sistema
  public loginUser(newLogin: UserListLogin): Observable<any> {

    return this.http.post<any>(`${API}/login-user`, {newLogin: newLogin})
      .pipe(
        res => res,
        error => error
      )
  }
}
