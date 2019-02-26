import { Component, OnInit, Input, Output } from '@angular/core';
import { GralService } from '../../servicios/gral.service';
import { EventEmitter } from 'protractor';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { CarrerasModel } from '../../modelos/carrerasModel';

/*
export interface CarrerasModel {
  // grado: string;
  nombre: string;
  info: string;
}
*/

@Component({
  selector: 'app-carreras-list',
  templateUrl: './carreras-list.component.html',
  styleUrls: ['./carreras-list.component.scss']
})
export class CarrerasListComponent implements OnInit {
  @Input() public grado;
  // @Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent>
//  itemSelected = new EventEmitter();
  carreras: String;



  constructor(public gralService: GralService) {
    console.log('grado en carreras: ', this.grado);
  }
/*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    console.log(value.toLowerCase());


    // return this.carreras.filter(carrera => carrera.toLowerCase().indexOf(filterValue) === 0);

  }*/

  ngOnInit() {
    this.GetCarreras();
  }

  GetCarreras() {
    this.gralService.GetCarreras().subscribe(result => {
      if (result.statusCode === 200) {
        this.carreras = result.info
      }

      // this.carreras.nombre = this._filter(result.info)[0]
   });
  }




}
