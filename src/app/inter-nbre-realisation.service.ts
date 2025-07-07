import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestResult } from './model/RequestResult';
import { HttpClient } from '@angular/common/http';
import { BACK_URL_BASE } from './model/Constants';

@Injectable({
  providedIn: 'root'
})
export class InterNbreRealisationService {

  constructor(private http: HttpClient) {}

  getInterNbre(nbre:number): Observable<RequestResult> {
    let request:string = `method=getNbreInter&params=nbre_realisation;${nbre}`;
    let url:string = `${BACK_URL_BASE}${request}`;
    return this.http.get<RequestResult>(url);
  }
}
