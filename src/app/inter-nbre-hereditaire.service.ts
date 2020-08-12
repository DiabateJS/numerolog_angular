import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreHereditaireService {
  private _tabInterNbreHereditaire:string[];

  constructor() {
    this._tabInterNbreHereditaire = [
      "Courage, assurance, audace, aplomb.",
      "Équilibre, Sociabilité, Bon sens, Amabilité.",
      "Créativité, Adaptabilité, Inventivité, Expression.",
      "Méthode, Ordre, Minutie, Rigueur et Ténacité.",
      "Combativité, Ardeur, Résistance.",
      "Justice, Générosité, Honnêteté.",
      "Raison, Sagesse, Bon sens, Modération.",
      "Autorité, Détermination, Influence.",
      "Dignité, Fierté, Amour-propre."
    ];
  }

  getInterNbre(nbre:number):string{
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
        interNbre = this._tabInterNbreHereditaire[nbre-1];
    }
    return interNbre;
  }
}
