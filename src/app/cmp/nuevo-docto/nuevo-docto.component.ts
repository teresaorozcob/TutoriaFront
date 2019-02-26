import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DoctoModel } from '../../modelos/DoctoModel';
// import { DataDoctosService } from '../../servicios/data-doctos.service';
import { element } from 'protractor';
import { NotificacionController } from '../../controllers/notificacionesCtrl';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AcademicoModel } from '../../modelos/academicoModel';

// file:
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/api/upload/addFile';
import { Http, Response } from '@angular/http';
import {UploadService} from '../../servicios/upload.service';


// mientras...
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-nuevo-docto',
  templateUrl: './nuevo-docto.component.html',
  styleUrls: ['./nuevo-docto.component.scss']
})
export class NuevoDoctoComponent implements OnInit {
  txtTipoDocto: string
  txtNombreDocto: string
  animalControl = new FormControl('holaaaa')
  numCedula = new FormControl(false);
  disableSelect = new FormControl(true);


  @Input('grado') grado: AcademicoModel;

  // @Output() doctoAgregado = new EventEmitter(); // evento que creará registro
  @Output() doctoAgregado = new EventEmitter<DoctoModel>(); // de tipo Documento

  // del hijo:
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  attachmentList: any = [];


  doctos = [];
  /*docto: DoctoModel = { // para el dataBinding
    docu_Tipo: ''
  }*/
  docto: [DoctoModel]
  notif = new NotificacionController();

  // constructor(/*public dataDoctos: DataDoctosService*/) { }
  constructor(
    private http: Http,
    private el: ElementRef,
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<NuevoDoctoComponent>,
    @Inject(MAT_DIALOG_DATA)
      public data: DialogData
    ) {

      // console.log('lo que iene de arriba data; ', data); no servirà, porque no se tratarà info por aquì de arri






    this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
      console.log('está en constructor');
    }
  }

  AddDocumento(docto) {  // éste lo usamos para guardar todo el json
    docto.docu_Fecha = new Date();
    docto.docu_Tutor = { idTutor: 1837, nombreTutor: 'Rosario Mendez Torres' };
/*
    this.dataDoctos.AddDocumento(docto).subscribe(data => {
      // console.log(data);

      docto.docu_Tipo = ''
      // this.docto.docu_Tutor = ''

    })
    */
  }



  ngOnInit() {





    // UPLOAD
    // console.log('entra a upload del PADRE')
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

      console.log('FileName_API: ', response);
      console.log('FileName_Uploaders: ', item.file.name);
      console.log('type: ', item.file.type);
      console.log('size: ', item.file.size);

      alert(response);
    };

  }

  upload() {
    // console.log('entra a upload PADRE')

    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log('iam+ ' + inputEl);
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) { // a file was selected
      console.log('Total de documentos:', fileCount);

        for (let i = 0; i < fileCount; i++) {
            formData.append('photo', inputEl.files.item(i));
        }
        this.http
            .post(URL, formData).map((res: any) => res).subscribe(
                (success) => {
                 alert(success._body);
              },
                (error) => alert(error)
            );

    }
   }


}
