import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestResult } from './model/RequestResult';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterCheminVieService {
  constructor(private http: HttpClient) {}

  getInterNbre(nbre:number):Observable<RequestResult> {
    const urlBase:string = 'http://localhost:85/numerolog-api/index.php?';
    let request:string = `method=getNbreInter&params=nbre_chemin_vie;${nbre}`;
    let url:string = `${urlBase}${request}`;
    return this.http.get<RequestResult>(url);
  }
}
