import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreDominantService {
  private _tabInterNbresDominants:string[] = [];

  constructor() {
    this._tabInterNbresDominants = [
      "il caractérise l'autorité et la volonté.",
      "il indique une esprit de coopération et la recherche de l'union.",
      "il montre votre aisance en société et votre sens des relations.",
      "il atteste de vos qualités d'ordre et de persévérance dans le travail.",
      "c'est l'indication du mouvement et des voyages. Vous faites preuve d'un esprit large.",
      "il indique la recherche de l'harmonie et de l'accord. Vous avez le sens de la famille. C'est le signe de l'amour et de l'amitié.",
      "il révèle des qualités d'invention et de recherche. Parfois, il montre un engagement dans un idéal.",
      "il révèle la recherche de la réussite à tous niveaux. Il signale une certaine chance matérielle.",
      "c'est le signe de la qualité de dévouement et d'altruisme."
    ];
  }

  private getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
      interNbre = this._tabInterNbresDominants[nbre-1];
    }
    return interNbre;
  }

  getIntersNbres(nbres:number[]):Map<number,string>{
    let intersNbres:Map<number,string> = new Map<number,string>();
    for (let i = 0 ; i < nbres.length ; i++){
      intersNbres.set(nbres[i],this.getInterNbre(nbres[i]));
    }
    return intersNbres;
  }
}
