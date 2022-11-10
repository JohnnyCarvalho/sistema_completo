import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { PeriodicElement } from 'src/interfaces/teste-interface';
import { FuncionarioService } from 'src/services/funcionario.service';
import { ModalDialogComponent } from '../modal-dialog.component';

@Component({
  selector: 'app-table-escala',
  templateUrl: './table-escala.component.html',
  styleUrls: ['./table-escala.component.css']
})
export class TableEscalaComponent implements OnInit {

  public horariosList: PeriodicElement[] = [
    { horarios: '09:00' },
    { horarios: '10:00' },
    { horarios: '11:00' },
    { horarios: '13:00' },
    { horarios: '14:00' },
    { horarios: '15:00' },
    { horarios: '16:00' },
    { horarios: '17:00' },
    { horarios: '18:00' },
    { horarios: '19:00' },
  ];

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
  ) {}


  ngOnInit(): void { }

  // Nomae das colunas da tabela
  displayedColumns: string[] = [
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
    'domingo',
  ];


  agendarHorario() {
    console.log('Horário agendado com sucesso!');

  }

}
