import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FuncionarioService } from 'src/services/funcionario.service';
import { FuncionarioInterface } from '../../../../interfaces/funcionario-interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {

  public funcionariosList: FuncionarioInterface[] = []

  public disabled: boolean;

  public disponivel: string = 'Disponível'
  public indisponivel: string = 'Indisponível'

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
    ) {

      this.disabled = false

      this.funcionarioService.getEscala().subscribe(
        resposta => {
          this.funcionariosList = resposta
          console.log(resposta[0]);


          resposta.filter(() => {
            if (resposta.toString() === '1') {
              this.disabled = false
              
              this.funcionariosList[0].segunda = this.disponivel

            }
            else {
              this.disabled = true
            }
            return this.disabled
          })
        }
      )
    }

  openDialog() {
    // debugger
    const dialogRef = this.dialog.open(ModalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}

  // Nomae das colunas da tabela
  displayedColumns: string[] = [
    'name',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
    'domingo',
  ];

  // Ao clicar em um nome na tabela
  clickedRows = new Set<FuncionarioInterface>();

}
