import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreManquantService {
  private _tabInterNbresManquants:string[] = [];

  constructor() {
    this._tabInterNbresManquants = [
      "il indique une insuffisance d'assurance et de confiance en soi.",
      "il dénote une association difficile.",
      "il indique un certain manque de souplesse et d'adaptation.",
      "il présage de difficultés à organiser et un certain manque de stabilité.",
      "il laisse penser que vous n'aimez pas le changement. Vous êtes sédentaire.",
      "c'est la preuve d'un mariage difficile. Vous avez l'esprit peu conciliant. Vous évitez les obligations.",
      "il indique un certain manque de compréhension. Une nécessité pour vous est de vous ouvrir au niveau de l'esprit.",
      "il dévoile des difficulté à maintenir l'équilibre sur le plan matériel (ou trop, ou trop peu...)",
      "il dénote d'un manque d'intérêt pour les autres."
    ];
  }

  private getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
        interNbre = this._tabInterNbresManquants[nbre-1];
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
