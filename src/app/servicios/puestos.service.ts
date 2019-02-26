import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PuestoModel } from '../modelos/puestoModel';
/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PuestosService {
  puesto: PuestoModel;
  urlApi: String = 'http://localhost:3000/api/puestos/';
  constructor(private http: HttpClient) { }

  GetPuestos() {
    return this.http.get<PuestoModel>(this.urlApi + 'getAll')
  }


}
