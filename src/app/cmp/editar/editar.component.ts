import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademicoService } from '../../servicios/academico.service';
import { MatDialog} from '@angular/material';
import { GradoEditarComponent } from '../grado-editar/grado-editar.component';
import { AcademicoModel } from '../../modelos/academicoModel';
import { Logs } from 'selenium-webdriver';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  // @Output() public editar = new EventEmitter();
  // @Output() public editar = new EventEmitter<AcademicoModel>();
  // grado: [AcademicoModel]
  @Input('grado') grado: AcademicoModel;
  @Output() editado = new EventEmitter<string>()






  accion: String = ''
  _id: String = ''
  tipo: String = ''
  nombre: String = ''
  escuela: String = ''
  periodoIni: Number
  periodoFin: Number
  titulo: Boolean
  fechaTitulo: Number

  constructor(public academicoService: AcademicoService,
    public dialog: MatDialog) {

    }

  ngOnInit() {


  }


  openDialog_editarEstudios(grado): void {


    this.accion = 'Editar Grado Académico'

    this._id = grado._id
    this.tipo = grado.tipo
    this.nombre = grado.nombre
    this.escuela = grado.escuela
    this.periodoIni = grado.periodoIni
    this.periodoFin = grado.periodoFin
    this.titulo = grado.titulo
    this.fechaTitulo = grado.fechaTitulo

    const dialogRef = this.dialog.open(GradoEditarComponent, {
      width: '750px',
      data: {
        accion: this.accion,
        _id: this._id,
        tipo: this.tipo,
        nombre: this.nombre,
        escuela: this.escuela,
        periodoIni: this.periodoIni,
        periodoFin: this.periodoFin,
        titulo: this.titulo,
        fechaTitulo: this.fechaTitulo,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
       // console.log('The dialog was closed');
           this.tipo = result.tipo;
       console.log('seleccionó: ', result.tipo);
      // console.log('grado supuestamente editado: ', grado)
      // console.log('dialogRef: ', dialogRef);

       //  this.editar.emit(result.tipo);


     // console.log('grado a editar', grado);
     this.editado.emit(result.tipo)

    });




  }


}
