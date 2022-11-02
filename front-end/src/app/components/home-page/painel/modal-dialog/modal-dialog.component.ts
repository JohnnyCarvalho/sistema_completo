import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { PeriodicElement } from '../../../../../interfaces/teste-interface';
import { FuncionarioInterface } from '../../../../../interfaces/funcionario-interface';
import { Observable } from 'rxjs';
import { FuncionarioService } from '../../../../../services/funcionario.service';


@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  public listHorarios: Observable<FuncionarioInterface[]>

  constructor(private horariosService: FuncionarioService) {

    this.listHorarios = this.horariosService.getHorarios()

   }

  ngOnInit(): void {
  }

  public comfirmarAgendamento(): void {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cadastro efetuado com sucesso!',
        showConfirmButton: false,
        timer: 2500

      })
    }


  public cancelarAgendamento() {

    Swal.fire({
      title: 'Deseja salvar as operações?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('As auterações não serão salvas', '', 'info')
      }
    })

  }



    public ELEMENT_DATA: PeriodicElement[] = [
      {position: 'Primeiro Horário', horarios: '09:00'},
      {position: 'Segundo Horário', horarios: '10:00'},
      {position: 'Terceiro Horário', horarios: '11:00' },
      {position: 'Quarto Horário', horarios: '13:00' },
      {position: 'Quinto Horário', horarios: '14:00' },
      {position: 'Sexto Horário', horarios: '15:00' },
      {position: 'Sétimo Horário', horarios: '16:00' },
      {position: 'Oitavo Horário', horarios: '17:00' },
      {position: 'Nono Horário', horarios: '18:00' },
      {position: 'Décimo Horário', horarios: '19:00' },
    ];


    displayedColumns: string[] = ['select', 'position', 'horarios'];


}
