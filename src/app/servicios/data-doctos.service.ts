import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctoModel } from '../modelos/DoctoModel';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class DataDoctosService {
  docto: [DoctoModel]
  urlApi: String = 'http://localhost:3000/api/documentos/'


  constructor(private http: HttpClient) {
    console.log('Servicio DataDoctos ok!');
   }

  GetData() {
    // return this.http.get<DoctoModel[]>('https://jsonplaceholder.typicode.com/todos')

    return this.http.get<DoctoModel>('http://localhost:3000/api/documentos/getByTutor/1837')

   /*
    let mientras
    mientras = this.http.get('https://jsonplaceholder.typicode.com/todos')

    console.log('mientras: ', mientras)
    return mientras
    */
  }

  // AddDocumento(docto) {
    // AddDocumento(docto: DoctoModel): Observable<DoctoModel> {
    AddDocumento(docto: DoctoModel) {

      // console.log('entra a servcio add.  docto:', docto);
      // console.log('this.urlApi + add: ', this.urlApi + 'add');

      return this.http.post<DoctoModel>(this.urlApi + 'add', docto, httpOptions)

  }
/*
  DeleteDocumento(docto: DoctoModel) {
    console.log('entra a servicio Delete');

    // return this.http.delete('http://localhost:3000/api/documentos/remove/5b7f46ab885fc9e549ef1b4c')
    return this.http.delete<DoctoModel>('http://localhost:3000/api/documentos/remove/5b7f46ab885fc9e549ef1b4c', httpOptions)

  }

  ValidateDocumento(docto: DoctoModel) {
    console.log('entra a servicio Validar');
  }

  DeclineDocumento(docto: DoctoModel) {
    console.log('entra a servicio Declinar');
  }

  AddObservacion(docto: DoctoModel) {
    console.log('entra a servicio agregar observacion');
  }
  */
}
