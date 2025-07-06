import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestResult } from './model/RequestResult';

@Injectable({
  providedIn: 'root'
})
export class InterNbreHereditaireService {

  constructor(private http: HttpClient) {}

  getInterNbre(nbre:number): Observable<RequestResult> {
    const urlBase:string = 'http://localhost:85/numerolog-api/index.php?';
    let request:string = `method=getNbreInter&params=nbre_hereditaire;${nbre}`;
    let url:string = `${urlBase}${request}`;
    return this.http.get<RequestResult>(url);
  }
}
