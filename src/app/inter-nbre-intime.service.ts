import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestResult } from './model/RequestResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterNbreIntimeService {

  constructor(private http: HttpClient) {
  }

  getInterNbre(nbre:number):Observable<RequestResult> {
    const urlBase:string = 'http://localhost:85/numerolog-api/index.php?';
    let request:string = `method=getNbreInter&params=nbre_intime;${nbre}`;
    let url:string = `${urlBase}${request}`;
    if (nbre > 0 && nbre < 10){
      return this.http.get<RequestResult>(url);
    }
  }
}
