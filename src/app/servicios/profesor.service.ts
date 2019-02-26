import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfesorModel } from '../modelos/profesorModel';
import { Observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ProfesorService {
  tutor: ProfesorModel;

  urlApi: String = 'http://localhost:3000/api/tutor/';

  constructor(private http: HttpClient) { }

  AddTutor(tutor: ProfesorModel): Observable<ProfesorModel> {
    console.log('tutor: ', tutor);

    return this.http.post<ProfesorModel>(this.urlApi + 'add', tutor, httpOptions)
  }
}
