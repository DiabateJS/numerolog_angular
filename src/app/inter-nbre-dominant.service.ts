import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestResult } from './model/RequestResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterNbreDominantService {

  constructor(private http: HttpClient) {}

  getInterNbre(nbre:number): Observable<RequestResult> {
    const urlBase:string = 'http://localhost:85/numerolog-api/index.php?';
    let request:string = `method=getNbreInter&params=nbre_dominant;${nbre}`;
    let url:string = `${urlBase}${request}`;
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
