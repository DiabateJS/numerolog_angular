import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestResult } from './model/RequestResult';
import { Observable } from 'rxjs';
import { BACK_URL_BASE } from './model/Constants';

@Injectable({
  providedIn: 'root'
})
export class InterNbreIntimeService {

  constructor(private http: HttpClient) {
  }

  getInterNbre(nbre:number):Observable<RequestResult> {
    let request:string = `method=getNbreInter&params=nbre_intime;${nbre}`;
    let url:string = `${BACK_URL_BASE}${request}`;
    return this.http.get<RequestResult>(url);
  }
}
