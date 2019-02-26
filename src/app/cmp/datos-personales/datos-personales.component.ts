import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../modelos/UsuarioModel';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  // user = new UsuarioModel(1, 'Méndez', 'Torres', 'Rosario', 'rosario.mendezt@sabes.edu.mx');
  user = new UsuarioModel();



  constructor() {
    /*
    this.nombre = 'Rosario';
    this.apellido = 'Mendez Torres';
    this.correo = 'rosario.mendezt@sabes.edu.mx';
    this.idEmpleado = 1837;
    this.direccion = {
      calle : 'Bosque Gomero',
      ciudad : 'León, Gto.',
      pais : 'México',
      cPostal: 37590
    }
*/
  }


  ngOnInit() {
  }

  get usuarioActual() {
    //     console.log(this.user)
    return JSON.stringify(this.user)
  }

}
