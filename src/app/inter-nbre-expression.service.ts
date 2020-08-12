import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreExpressionService {
  private _tabInterNbreExpression:string[];

  constructor() {
    this._tabInterNbreExpression = [
      "Peu importe leur spécialité ,les personnes de type 1 recherchent des postes de commande.",
      "Vous avez besoin d’une tendance harmonieuse sans querelle ni dispute.Vous êtes émotif (ve).",
      "Vous êtes sociable, enthousiaste et optimiste.",
      "Vous êtes entêté(e) et capable de tout pour obtenir ce que vous désirez.",
      "Vous êtes souvent prêt(e) à tout remettre en question mais vos qualités d’adaptation vous permettent de vous sortir de toutes les situations.",
      "Vous avez le sens de la beauté et êtes amoureux(se) de belles choses.",
      "Votre Hypersensibilité vous pousse à être instable dans votre comportement.",
      "Vous pouvez être dur(e) et agressif(ve) envers les personnes qui ne vous intéressent pas.",
      "Vous êtes cependant réservé(e) et indépendant(e)."
    ];
  }

  getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 & nbre < 10){
        interNbre = this._tabInterNbreExpression[nbre-1];
    }
    return interNbre;
  }
}
