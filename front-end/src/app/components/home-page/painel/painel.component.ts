import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FuncionarioService } from 'src/services/funcionario.service';
import { FuncionarioInterface } from '../../../../interfaces/funcionario-interface';
import { Observable } from 'rxjs';
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

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
    ) {

      this.disabled = true

      // this.funcionariosList = this.funcionarioService.getEscala()
      // console.log(this.funcionariosList);

      this.funcionarioService.getEscala().subscribe(
        resposta => {
          this.funcionariosList = resposta
          // debugger
          console.log(typeof this.funcionariosList[0].segunda);

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
