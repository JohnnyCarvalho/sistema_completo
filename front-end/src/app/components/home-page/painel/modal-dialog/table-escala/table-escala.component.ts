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

  public disabled: boolean = true;

  public condicao: FuncionarioInterface[] = []

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
    { horarios: '19:00' }
  ];

  public horarios = this.horariosList;


  public somenteHorarios() {

    console.log(this.horarios.forEach((element) => {
      if (element.horarios.length < 9) {

        let segunda = element.horarios[0]
        let terca = element.horarios[1]
        let quarta = element.horarios[2]
        let quinta = element.horarios[3]
        let sexta = element.horarios[4]
        let sabado = element.horarios[5]
        let domingo = element.horarios[6]

        console.log('Essa é a segunda: ', segunda);


      }
    }));

  }

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
  ) {

    this.funcionarioService.getEscala().subscribe(
      resposta => {
        this.condicao = resposta
        console.log(resposta);


        if (this.condicao[0].segunda === '0') {
          this.disabled = true
          console.log('Dentro do if: ', this.condicao[0].segunda);

        }
        else {
          this.disabled = false
        }
      }
    )
  }

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
