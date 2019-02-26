import { Component, OnInit, ElementRef, Input, Output } from '@angular/core';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
const URL = 'http://localhost:3000/api/upload/addFile';
import {UploadService} from '../../servicios/upload.service';
import {saveAs} from 'file-saver';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // @Output() public up = new EventEmitter();

   public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  public title = 'app works!';
  attachmentList: any = [];

  constructor(private http: Http, private el: ElementRef, private uploadService: UploadService) {
    this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
      console.log('está en constructor');
    }
  }

  ngOnInit() {

    // console.log('entra a upload')
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
    console.log('entra a upload')

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

/*
   download(index) {
    const filename = this.attachmentList[index].uploadname;

    this.uploadService.downloadFile(filename)
    .subscribe(
        data => saveAs(data, filename),
        error => console.error(error)
    );
}
*/
}


/*import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { FileService } from '../servicios/file.service';
import {saveAs} from 'file-saver';

 // const uri = 'http://localhost:3000/file/upload';
 // const uri = 'http://localhost:3000/api/upload/upload';
 const uri = 'http://localhost:3000';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [FileService]
})
export class UploadComponent implements OnInit {
  uploader: FileUploader = new FileUploader({url: uri});

  attachmentList: any = [];

  constructor(private _fileService: FileService) {

    console.log('entra a cmp', uri);


      this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {

        console.log('response: ', response);

          this.attachmentList.push(JSON.parse(response));
      }
  }

  download(index) {
      const filename = this.attachmentList[index].uploadname;

      this._fileService.downloadFile(filename)
      .subscribe(
          data => saveAs(data, filename),
          error => console.error(error)
      );
  }

  ngOnInit() {
  }

}
*/
