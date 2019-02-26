import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AcademicoModel } from '../../modelos/academicoModel';
import { AcademicoService } from '../../servicios/academico.service';
import { GralService } from '../../servicios/gral.service';
import { NotificacionController } from '../../controllers/notificacionesCtrl';
// import { EventEmitter } from 'events';



// pra titulo
export interface DialogData {
  animal: string;
  name: string;
}

export interface CarrerasModel {
  // grado: string;
  nombre: string,
  info: string
}

@Component({
  selector: 'app-grado-editar',
  templateUrl: './grado-editar.component.html',
  styleUrls: ['./grado-editar.component.scss']
})
export class GradoEditarComponent implements OnInit {
  @Output() public editar = new EventEmitter<AcademicoModel>();



   // public grado = '';
   grado: [CarrerasModel];
   academico: {AcademicoModel};
   notif = new NotificacionController();
   // carreras: CarrerasModel;
   carreras: String

   // para titulo:
   disableSelect = new FormControl(false);

   constructor(
     public gralService: GralService,
     public academicoService: AcademicoService,
     public dialogRef: MatDialogRef<GradoEditarComponent>,
     @Inject(MAT_DIALOG_DATA)
       public data: DialogData
   ) {}

   ngOnInit() {
     this.gralService.GetCarreras().subscribe(result => {
       this.carreras = result.info
       // console.log('result carreras:', this.carreras );
    // this.carreras.nombre = this._filter(result.info)[0]
   });

    if (!this.disableSelect) {
      // algo podrìa ser aquí
    }
   }

   onNoClick(): void {
    // console.log('cerrò en no gracias');

     // this.dialogRef.close();


   }

  UpdateGradoAcademico(grado) {
    // console.log('grado: ', grado);
    // SERVICIO API
    this.academicoService.UpdateGradoAcademico(grado)
    .subscribe(result => {
     // console.log('grado2: ', grado);
     // console.log('result', result);


      if (result.statusCode === 200) {
        this.notif.showNotification('top', 'right', 'Grado académico actualizado correctamente', 'success', 'done')
      } else {
        this.notif.showNotification('top', 'right', 'Ocurrió un error al intentar actualizar el grado académico', 'danger', 'pan_tool')
      }
    })

    console.log('result grado!: ', grado);



  }


}
