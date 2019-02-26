import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademicoModel } from '../../modelos/academicoModel';
import { MatDialog} from '@angular/material';
import { GradoNuevoComponent } from '../grado-nuevo/grado-nuevo.component';
import { NuevoDoctoComponent } from '../nuevo-docto/nuevo-docto.component';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.scss']
})
export class GradoComponent implements OnInit {
  accion: String



  @Input('grado') grado: AcademicoModel;
  @Output() editado = new EventEmitter<string>()




  constructor(public dialog: MatDialog) {

  }

  addDocumento(grado): void {
    this.accion = 'aaaaaaa'

    console.log('viene grado: ', grado);


    const dialogRefNuevo = this.dialog.open(NuevoDoctoComponent, {
      width: '750px',
      // data: {accion: this.accion}
      data: {grado}
    });

    dialogRefNuevo.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       //   this.animal = result;

       // console.log('seleccionó ', result);

    });
  }

    openDocumentos(): void {
      const dialogRef = this.dialog.open(GradoNuevoComponent, {
        width: '750px',
        data: {accion: this.accion}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  ngOnInit() {

  }



  vieneEditado(tipo) {
    console.log(tipo);

    this.editado.emit(tipo)
  }

}
