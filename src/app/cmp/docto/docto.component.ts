import { Component, OnInit, Input } from '@angular/core';
import { DataDoctosService } from '../../servicios/data-doctos.service';
import { DoctoModel } from '../../modelos/DoctoModel';
import { Injectable } from '@angular/core';

import { NotificacionController } from '../../controllers/notificacionesCtrl';

@Component({
  selector: 'app-docto',
  templateUrl: './docto.component.html',
  styleUrls: ['./docto.component.scss']
})


@Injectable()
export class DoctoComponent implements OnInit {
  @Input('docto') docto: DoctoModel;

  // @Input() nombreDocto; // es una entrada

  notif = new NotificacionController();
  // tslint:disable-next-line:label-position
  perfilTutor: Boolean = false;
  hideValidacion: Boolean;
  hideDeclina: Boolean;
  hideObservaciones: Boolean = true;

  // constructor(public dataDoctos: DataDoctosService) { }


  ngOnInit() {

  }

  // DeleteDocumento(docto) {  // sòlo para TUTOR y sòlo si no está validado
  DeleteDocumento(docto: DoctoModel) {
    // con arreglo, despuès con API

    const resp = confirm('Estás seguro de querer eliminarlo?');

    if (resp) {
      // console.log('docto a eliminar: ', docto)

      // llamada a la API
      ///////// this.dataDoctos.DeleteDocumento(docto);

      this.notif.showNotification('top', 'right', 'Documento eliminado correctamente', 'success', 'delete_sweep')
    }
  }

  ValidateDocumento(docto): void { // Sólo coordinador, y sólo para cambiar status de validación -- èste sì actualiza en el Arreglo/Json
    console.log('docto a validar: ', docto)

    // llamada a la API
    ///////// this.dataDoctos.ValidateDocumento(docto);

    /*for (let i = 0; i <= this.docto.length; i++) {
      if (docto === this.docto[i]) {
        this.docto[i].docto_Status = 'Validado'
      }
    }*/
    this.notif.showNotification('top', 'right', 'Documento validado', 'info', '')
    this.hideValidacion = true;
    this.hideDeclina = false;
    this.hideObservaciones = true;
  }

  DeclineDocumento(docto): void { // Sólo coordinador, y sólo para cambiar status de validación -- èste sì actualiza en el Arreglo/Json
     // llamada a la API
    /////// this.dataDoctos.DeclineDocumento(docto);

        // mostrar hasta guardar observaciòn
    // this.notif.showNotification('top', 'right', 'Documento declinado', 'info', '')!!!!!!!!

    this.hideValidacion = false;
    this.hideDeclina = true;
    this.hideObservaciones = false;
  }

  AddObservacion(docto): void { // Sólo coordinador, y sólo para cambiar status de validación -- èste sì actualiza en el Arreglo/Json
    // llamada a la API
    //////// this.dataDoctos.AddObservacion(docto);

       // mostrar hasta guardar observaciòn
   this.notif.showNotification('top', 'right', 'Documento declinado', 'info', '')

   this.hideValidacion = false;
   this.hideDeclina = true;
   this.hideObservaciones = false;
  }
}






/* pintaba sòlo el dato {{}}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docto',
  templateUrl: './docto.component.html',
  styleUrls: ['./docto.component.scss']
})
export class DoctoComponent implements OnInit {
  @Input() nombreDocto; // es una entrada

  constructor() { }


  ngOnInit() {
  }
*/
