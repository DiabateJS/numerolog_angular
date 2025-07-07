import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestResult } from './model/RequestResult';
import { Observable } from 'rxjs';
import { BACK_URL_BASE } from './model/Constants';

@Injectable({
  providedIn: 'root'
})
export class InterNbreDominantService {

  constructor(private http: HttpClient) {}

  getInterNbre(nbre:number): Observable<RequestResult> {
    let request:string = `method=getNbreInter&params=nbre_dominant;${nbre}`;
    let url:string = `${BACK_URL_BASE}${request}`;
    return this.http.get<RequestResult>(url);
  }

  getIntersNbres(nbres:number[]):Map<number,Observable<RequestResult>>{
    let intersNbres:Map<number,Observable<RequestResult>> = new Map<number,Observable<RequestResult>>();
    for (let i = 0 ; i < nbres.length ; i++){
      intersNbres.set(nbres[i],this.getInterNbre(nbres[i]));
    }
    return intersNbres;
  }
}
