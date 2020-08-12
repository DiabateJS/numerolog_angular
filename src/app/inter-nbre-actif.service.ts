import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterNbreActifService {

  private _tabInterNbreActif:string[];

  constructor() {
    this._tabInterNbreActif = [
      "Votre nombre actif est le 1, c’est le nombre le plus fort, mais certainement le plus difficile à porter. ",
      "Vous êtes à la recherche d’un équilibre de vie, de l’harmonie avec votre entourage.",
      "Original et intelligent, vous saurez habilement trouver votre talent que ce soit en art graphique ,plastique ou dramatique.",
      "Vous êtes des personnes équilibrées, structurées, et vous aimez bien savoir où vous vous en allez avant d'agir.",
      "Que l’on vous propose de lancer de nouveaux produits, de faire des voyages ou de modifier votre environnement, vous faites preuve d'un enthousiasme débordant.",
      "Le bonheur est votre seule et unique préoccupation, alors vous recherchez surtout une certaine harmonie familiale.",
      "Douées d'une intelligence forte, supérieure à la moyenne, vous aimez faire le tour de la question avant de vous engager dans une voie précise.",
      "Vous ne sauriez accepter que quelqu'un ne soit pas reconnu pour sa valeur ou ses performances.",
      "Vous êtes doué d’une sensibilité intense qui influence non seulement vos réalisations, mais également votre comportement."
    ];
  }

  getInterNbre(nbre:number):string {
    let interNbre:string = '';
    if (nbre > 0 && nbre < 10){
      interNbre = this._tabInterNbreActif[nbre-1];
    }
    return interNbre;
  }


}
