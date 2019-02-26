import { Component, OnInit } from '@angular/core';
import { ProfesorModel } from '../../modelos/profesorModel';
// import { PuestoModel } from '../modelos/puestoModel';
import { ProfesorService } from '../../servicios/profesor.service';
import { PuestosService } from '../../servicios/puestos.service';

import { log } from 'util';
import { NotificacionController } from '../../controllers/notificacionesCtrl';

@Component({
  selector: 'app-profesor-perfil',
  templateUrl: './profesor-perfil.component.html',
  styleUrls: ['./profesor-perfil.component.scss']
})
export class ProfesorPerfilComponent implements OnInit {
  profesor: [ProfesorModel];
  puestos: String;
  urlApi: String = 'http://localhost:3000/api/puestos/'

  notif = new NotificacionController();

  constructor(public profesorService: ProfesorService, public puestosService: PuestosService) { }




  SaveDatosProfesor(profesor) {
    this.profesorService.AddTutor(profesor).subscribe(data => {
      // console.log(data.statusCode);

      if (data.statusCode === 200) {

        this.notif.showNotification('top', 'right', 'Registro guardado correctamente', 'success', 'done')
      } else {

        this.notif.showNotification('top', 'right', 'Ocurrió un error al intentar guardar información', 'danger', 'pan_tool')
      }
    })
/*
    this.profesor.idProfesor = null
    this.profesor.correoInstitucional = null
    this.profesor.correoPersonal = null
    this.profesor.nombre = null
    this.profesor.apellido1 = null
    this.profesor.apellido2 = null
    // this.profesor.puestoInstituto = null
*/

    // redireccionar a====????



    return false; // con false evita refresh toda la página
  }




  ngOnInit() {
    this.puestosService.GetPuestos().subscribe(data => {
      // console.log('dataPuestos: ', data)

      if (data.statusText === 'OK' ) {
        this.puestos = data.info
      } else {
        console.log('Error: ' , data.statusCode)
      }
    });
  }

}
