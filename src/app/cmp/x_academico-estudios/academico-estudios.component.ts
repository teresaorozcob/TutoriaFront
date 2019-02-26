import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AcademicoModel } from '../../modelos/academicoModel';
import { AcademicoService } from '../../servicios/academico.service';
import { GralService } from '../../servicios/gral.service';
import { NotificacionController } from '../../controllers/notificacionesCtrl';
import { CarrerasModel } from '../../modelos/carrerasModel';


// pra titulo
export interface DialogData {
  animal: string;
  name: string;
}
/*
export interface CarrerasModel {
  // grado: string;
  nombre: string,
  info: string
}*/

@Component({
  selector: 'app-academico-estudios',
  templateUrl: './academico-estudios.component.html',
  styleUrls: ['./academico-estudios.component.scss']
})
export class AcademicoEstudiosComponent implements OnInit {
  carreras: String;

  // public grado = '';
  grado: [CarrerasModel];
  academico: {AcademicoModel};





  notif = new NotificacionController();

  // para titulo:
  disableSelect = new FormControl(false);

  constructor(
    public gralService: GralService,
    public academicoService: AcademicoService,
    public dialogRef: MatDialogRef<AcademicoEstudiosComponent>,
    @Inject(MAT_DIALOG_DATA)
      public data: DialogData
  ) {}


  ngOnInit() {

    this.gralService.GetCarreras().subscribe(result => {
      this.carreras = result.info

      console.log('result info:', this.carreras );

     // this.carreras.nombre = this._filter(result.info)[0]




  });


      if (!this.disableSelect) {
        // algo podrìa ser aquí
      }

  }

  onNoClick(): void {
    console.log('cerrò en no gracias');

    // this.dialogRef.close();
  }

  SaveGradoAcademico(grado) {

    // console.log('grado: ', grado);



    // SERVICIO API
    /*
    this.academicoService.PushGradoAcademico(grado).subscribe(result => {
    // console.log('result', result);

    if (result.statusCode === 200) {
      this.notif.showNotification('top', 'right', 'Grado académico guardado correctamente', 'success', 'done')
    } else {
      this.notif.showNotification('top', 'right', 'Ocurrió un error al intentar guardar el grado académico', 'danger', 'pan_tool')
    }
    })
*/

  }




}
