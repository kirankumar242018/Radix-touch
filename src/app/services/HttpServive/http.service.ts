import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  clientData:any;
  constructor(public http:HttpClient) { }

  getJsonData(){
    this.clientData = this.http.get('../../assets/table.json')
    console.log('table data..!',this.clientData)
    return this.clientData
  }
}
