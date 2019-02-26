import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AcademicoModel } from '../modelos/academicoModel';
import { Observable } from 'rxjs';
import { Logs } from 'selenium-webdriver';



const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class AcademicoService {
  academico: [AcademicoModel]
  urlApi: String = 'http://localhost:3000/api/academico/';

  constructor(private http: HttpClient) {
    // console.log('AcademicoService ok!');
  }



  // GET:
  GetGradosAcademicos(idProfesor: String) {
    const url = this.urlApi + 'getGradosByTutor/' + '5b8ed510592068040bfe040e';

   //  console.log('url: ', url)

    return this.http.get<AcademicoModel>(url)
  }

  // save:
  AddGradoAcademico(academico: AcademicoModel) {
    const url = this.urlApi + 'addGradoAcademico';

    return this.http.post<AcademicoModel>(url, academico, httpOptions)
  }

  // update:
  UpdateGradoAcademico(academico: AcademicoModel) {
    const url = this.urlApi + 'updateGradoAcademico';

    // console.log('en servicio academico:', academico);


    return this.http.put<AcademicoModel>(url, academico, httpOptions)
  }





  // PUSH: ya no se usará poruqe en su lugar fue un REF grado by tutor
  /*PushGradoAcademico(academico: AcademicoModel) {
    const url = this.urlApi + 'pushGradoAcademico';
    // console.log('Academico: ', academico);

    return this.http.post<AcademicoModel>(url, academico, httpOptions);
  }
*/

}
