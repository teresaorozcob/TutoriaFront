import { Component, OnInit, Output, Input } from '@angular/core';
import { AcademicoService } from '../../servicios/academico.service';
import { AcademicoModel } from '../../modelos/academicoModel';
import { MatDialog} from '@angular/material';
import { GradoEditarComponent } from '../grado-editar/grado-editar.component';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-academico-grados',
  templateUrl: './academico-grados.component.html',
  styleUrls: ['./academico-grados.component.scss']
})
export class AcademicoGradosComponent implements OnInit {
 viene: String;

grados: String
  // public gr: AcademicoModel[] = [];

  grado: [AcademicoModel]



  // @Output() public editar = new EventEmitter<AcademicoModel>();

  idProfesor: String = '5b8ed510592068040bfe040e'







  constructor(public academicoService: AcademicoService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.GetGradosAcademicos(this.idProfesor);

    // console.log('grado supuestamente editado: ', this.grado)
  }

  GetGradosAcademicos(idProfesor) {

    // console.log('this.idprofe:', this.idProfesor)
     this.academicoService.GetGradosAcademicos(this.idProfesor)
       .subscribe(result => {
          // console.log('result: ', result);



         if (result.statusCode === 200) {
           this.grados = result.info
           // console.log('index: ', this.grados.findIndex(g => g.tipo === 'Doctorado'));

          // console.log('primero:, ', result.info);





         } else {
           console.log('Error: ', result.statusCode)
           console.log('lo que viene de regreso: ', this.viene);

         }

       })

  }

  vieneEditado(tipo) {
    console.log('en academico ', tipo);

    this.GetGradosAcademicos(this.idProfesor)
    this.viene = tipo


  }
}
