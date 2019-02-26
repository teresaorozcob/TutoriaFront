import { Component, OnInit} from '@angular/core';
// import { DataDoctosService } from '../../servicios/data-doctos.service';
import { DoctoModel } from '../../modelos/DoctoModel';
import { NotificacionController } from '../../controllers/notificacionesCtrl';
import { attachEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-lista-doctos',
  templateUrl: './lista-doctos.component.html',
  styleUrls: ['./lista-doctos.component.scss']
})
export class ListaDoctosComponent implements OnInit {
    doctos: String
    // doctos = DoctoModel[]; desde el modelo no es un array
    notif = new NotificacionController();
    // dtDoctos: DoctoModel[];
    dtDoctos: DoctoModel[];
    // si es COORDINADOR, no mostrar "Agregar Docto"
    // tslint:disable-next-line:label-position
    perfilTutor: Boolean = true;
    // hideValidacion: Boolean;
    // hideDeclina: Boolean;
    // tslint:disable-next-line:member-ordering
    prueba: String = 'Listado de Documentos'
    // tslint:disable-next-line:member-ordering
    // existenDoctos: Boolean = true // si es V muestra contenido



  constructor(/*public dataDoctos: DataDoctosService*/) {
  }


  /*
  DeleteDocumento(docto) {  // sòlo para TUTOR y sòlo si no está validado
    // con arreglo, despuès con API

    const resp = confirm('Estás seguro de querer eliminarlo?');

    if (resp) {
      // console.log('docto a eliminar: ', docto)

      // llamada a la API
      this.dataDoctos.DeleteDocumento();

      /*
      for (let i = 0; i <= this.docto.length; i++) {
        if (docto === this.docto[i]) {
          this.docto.splice(i, 1);
        }
      }
      --

      this.notif.showNotification('top', 'right', 'Documento eliminado correctamente', 'success', 'delete_sweep')
    }


  }
  */

  // validar / declinar
  EditDocumento(): void { // Sòlo lo prepara para el update; creo que no se usará

  }



  ngOnInit() {
/*
    this.dataDoctos.GetData().subscribe(data => { // el nombre DATA proviene del JSON externo
      // aquí utilizar la demás info que trae el Json
      console.log('data API: ', data.info)
      // console.log('dtDoctos: ', this.dtDoctos);


      if (data.statusText === 'OK' ) {
        this.doctos = data.info
      } else {
        console.log('Error: ' , data.statusCode)
      }

    });
    */
  }

  // evento:
  // Recibirá una tarea a agregar a la lista por medio del servicio
  AddDocumentoEvent(dtDoctos: DoctoModel) {
    // this.dataDoctos.AddDocumento(dtDoctos);
    console.log('agregò...');


  }
}
