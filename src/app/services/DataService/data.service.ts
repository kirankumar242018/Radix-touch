import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject({data:'',
                                              type:''});
  currentMessage = this.messageSource.asObservable();

  changeMessage(data:any) {
    this.messageSource.next(data)

  }
}
