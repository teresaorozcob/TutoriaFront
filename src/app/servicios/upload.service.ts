import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Injectable()

export class UploadService {

    constructor(private _http: HttpClient) {}

    downloadFile(file: String) {
        const body = {filename: file};

        return this._http.post('http://localhost:3000/file/download', body, {
            responseType : 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
