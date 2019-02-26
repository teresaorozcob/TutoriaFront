import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarrerasModel } from '../modelos/carrerasModel';

/*
export interface CarrerasModel {
  grado: string;
  nombre: string;
  info: string;
}
*/
/*
@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class GralService {
  carrera: [CarrerasModel];

  urlApi: String = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  //  Carreras:
  GetCarreras() {
    // console.log('grado: ', grado)
    const url = this.urlApi + 'carreras/' + 'getAll';
    // const url = this.urlApi + 'carreras/' + 'getByGrado/Licenciatura';

   //  console.log('url', url);

     return this.http.get<CarrerasModel>(url)
    // return this.http.get<CarrerasModel[]>(this.urlApi + 'carreras/' + 'getByGrado/' + grado)
  }
}
