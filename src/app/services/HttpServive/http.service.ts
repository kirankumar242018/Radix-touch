import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  clientData:any;
  tableData:any;
  stockData:any;
  constructor(public http:HttpClient) { }

  getJsonData(){
    this.clientData = this.http.get('../../assets/table.json')
    console.log('table data..!',this.clientData)
    return this.clientData
  }
  getJsonTableData(){
    this.tableData = this.http.get('../assets/table2.json')
    console.log('project data..!',this.tableData)
    return this.tableData
  }
  getJsonStockData(){
    this.stockData = this.http.get('../assets/stock.json')
    console.log('stock data..!',this.stockData)
    return this.stockData
  }
}
