import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';

import { API } from './../../backend/api';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}

  // Método para buscar a escala dos funcionários no banco e mostrar na tabela
  public getEscala(): Observable<FuncionarioInterface[]> {

    // Buscar na base de dados
    return this.http.get<FuncionarioInterface[]>(`${API}/escala`)
    .pipe(
      first(),//Encerra conexão
      (map(response => response)),
    )
  }


  // Método para buscar no banco os horários disponíveis para agendamento de cada funcionário
  public getHorarios(): Observable<FuncionarioInterface[]> {

    // Buscar na base de dados
    return this.http.get<FuncionarioInterface[]>(`${API}/escala`)
    .pipe(
      first()//Encerra conexão
    )
  }


}
